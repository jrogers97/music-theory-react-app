export function loadTrainer(data) {
    return {
        type: 'LOAD_TRAINER',
        selectedTrainer: data
    };
}