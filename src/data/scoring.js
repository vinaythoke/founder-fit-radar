import { DOMAINS, QUESTIONS, BANDS } from './questions';

export const calculateScore = (answers) => {
    let weightedSum = 0;
    const domainAverages = {};
    const domainWeightedScores = {};

    // 1. Compute domain averages and weighted score
    for (const [key, domain] of Object.entries(DOMAINS)) {
        const domainQuestions = QUESTIONS.filter(q => q.domain === key);
        let domainTotal = 0;

        domainQuestions.forEach(q => {
            // Default to 1 if not answered (should be prevented by UI, but safe fallback)
            domainTotal += (answers[q.id] || 1);
        });

        const average = domainTotal / domainQuestions.length;
        domainAverages[key] = average;

        const weighted = average * domain.weight;
        domainWeightedScores[key] = weighted;
        weightedSum += weighted;
    }

    // 2. Raw Score (1-5)
    const rawScore = weightedSum; // sum of weighted averages

    // 3. Score 100
    // (raw_score - 1) / 4 * 100
    const score100 = Math.round(((rawScore - 1) / 4) * 100);

    // 4. Band
    const band = BANDS.find(b => score100 >= b.min && score100 <= b.max) || BANDS[0];

    // 5. Lowest Domain
    // Find domain with lowest AVERAGE score? Or lowest WEIGHTED score?
    // Usually "weakest link" implies the lowest performance (Average), regardless of weight.
    // "Top 1 low domain (highest risk)."
    // If Vision (12%) is 1.0 and Execution (18%) is 1.5, which is worse?
    // Vision is more broken (1.0).
    // I will use lowest AVERAGE score.
    let lowestDomainKey = '';
    let minAvg = Infinity;

    for (const [key, avg] of Object.entries(domainAverages)) {
        if (avg < minAvg) {
            minAvg = avg;
            lowestDomainKey = key;
        }
    }

    return {
        rawScore,
        score100,
        band,
        domainAverages,
        lowestDomain: lowestDomainKey,
        // Sort domains by average for radar/ordering if needed
    };
};
