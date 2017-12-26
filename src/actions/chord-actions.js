export function loadChord(data) {
    return {
        type: 'LOAD_CHORD',
        chord: data
    };
}

export function loadChordAudio(data) {
	return {
		type: 'LOAD_CHORD_AUDIO',
		chord_audio: data
	};
}