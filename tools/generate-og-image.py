from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
ASSETS_DIR = ROOT / "assets"
LOGO_PATH = ASSETS_DIR / "logo.png"
OUT_PATH = ASSETS_DIR / "og.png"

WIDTH = 1200
HEIGHT = 630


def load_font(size: int) -> ImageFont.ImageFont:
    candidates = [
        Path(r"C:\\Windows\\Fonts\\segoeui.ttf"),
        Path(r"C:\\Windows\\Fonts\\arial.ttf"),
    ]
    for path in candidates:
        if path.exists():
            return ImageFont.truetype(str(path), size=size)

    return ImageFont.load_default()


def main() -> None:
    background = (11, 13, 20, 255)  # #0b0d14
    img = Image.new("RGBA", (WIDTH, HEIGHT), background)

    # Subtle glows to avoid a flat background while keeping it minimal.
    glow = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    gdraw = ImageDraw.Draw(glow)
    gdraw.ellipse((-240, -300, 700, 640), fill=(59, 130, 246, 52))
    gdraw.ellipse((520, 160, 1500, 980), fill=(16, 185, 129, 42))
    img = Image.alpha_composite(img, glow)

    draw = ImageDraw.Draw(img)

    # Logo
    if LOGO_PATH.exists():
        logo = Image.open(LOGO_PATH).convert("RGBA")
        logo.thumbnail((140, 140), Image.LANCZOS)
        img.paste(logo, (84, 110), mask=logo)

    # Text
    title_font = load_font(72)
    subtitle_font = load_font(34)
    meta_font = load_font(28)
    small_font = load_font(24)

    text_x = 260
    text_y = 140

    draw.text((text_x, text_y), "ChatShell", font=title_font, fill=(255, 255, 255, 255))
    draw.text(
        (text_x, text_y + 92),
        "ChatGPT Export Tool",
        font=subtitle_font,
        fill=(215, 225, 245, 255),
    )
    draw.text(
        (text_x, text_y + 148),
        "PDF  •  Markdown  •  DOCX  •  JSON",
        font=meta_font,
        fill=(175, 195, 235, 255),
    )

    draw.text(
        (text_x, HEIGHT - 90),
        "Local-first. Privacy-first. Runs in your browser.",
        font=small_font,
        fill=(170, 185, 215, 255),
    )

    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    img.convert("RGB").save(OUT_PATH, format="PNG", optimize=True)


if __name__ == "__main__":
    main()
