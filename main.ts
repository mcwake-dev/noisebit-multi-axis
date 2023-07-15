let tones = [
    music.noteFrequency(Note.C3),
    music.noteFrequency(Note.D3),
    music.noteFrequency(Note.E3),
    music.noteFrequency(Note.F3),
    music.noteFrequency(Note.G3),
    music.noteFrequency(Note.A4),
    music.noteFrequency(Note.B4),
    music.noteFrequency(Note.C4),
    music.noteFrequency(Note.D4),
    music.noteFrequency(Note.E4),
    music.noteFrequency(Note.F4),
    music.noteFrequency(Note.G4),
    music.noteFrequency(Note.A5),
    music.noteFrequency(Note.B5)
]

let tone = tones[0];

function setTone() {
    tone = Math.map(Rotation.Pitch, -90, 90, 0, tones.length);
}
input.onGesture(Gesture.TiltLeft, () => {
    setTone();
})

input.onGesture(Gesture.TiltRight, () => {
    setTone();
})

basic.forever(function () {
	music.tonePlayable(tone, BeatFraction.Whole)
})
