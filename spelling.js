// =========================
// SPELLING ANALYSIS (NO AI)
// =========================
// Checks spelling attempt (typed)
export async function analyzeSpellingAttempt(targetWord, attempt) {
    const normalizedTarget = targetWord.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const normalizedAttempt = attempt.toLowerCase().replace(/[^a-z0-9]/gi, '');
    if (normalizedTarget === normalizedAttempt) {
        return { isCorrect: true, message: `Great job! You spelled \"${targetWord}\" correctly!`, attemptedWord: attempt };
    } else {
        return { isCorrect: false, message: `Almost! The word was \"${targetWord}\". You said \"${attempt}\". Try again!`, attemptedWord: attempt };
    }
}
