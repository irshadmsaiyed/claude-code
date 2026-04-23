import winsound
from pathlib import Path

def main():
    wav_path = Path(__file__).parent / "ulala.wav"
    winsound.PlaySound(str(wav_path), winsound.SND_FILENAME)

if __name__ == "__main__":
    main()
