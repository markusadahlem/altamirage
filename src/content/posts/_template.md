---
# ── Copy this file to start a new post ───────────────────────────────────────
# 1. Copy it into the right folder:
#       src/content/posts/graue-substanz/<slug>.md   (Wissenschaftsblog)
#    or src/content/posts/allgemeines/<slug>.md       (neuere Beiträge)
# 2. Rename the file — the filename (or the `slug:` field) becomes the URL.
# 3. Fill in the fields below and write the body in Markdown.
# 4. Set `draft: false` (or delete the line) when it's ready to publish.
# ─────────────────────────────────────────────────────────────────────────────

title: Titel des Beitrags
description: Ein Satz für Übersichten und Suchmaschinen.
pubDate: 2026-01-01            # Datum = Sortierschlüssel für Feed & Archiv
section: allgemeines           # graue-substanz | allgemeines
lang: de                       # de  ·  en → zeigt das „EN"-Label

# ── optional ─────────────────────────────────────────────────────────────────
readingTime: ≈ 5 Min. Lesezeit          # bei englischen Beiträgen: "≈ 5 min read"
standfirst: Optionaler kursiver Vorspann-Absatz, der über dem Text steht.
eyebrowDot: afferent                    # kleiner Punkt: grey-matter | afferent | efferent
# slug: mein-wunsch-url                 # nur nötig, um eine alte URL zu erhalten

draft: true                    # true = nur lokale Vorschau, nicht live
---

Hier beginnt der Fließtext in **Markdown**. Absätze, *kursiv*, **fett**, Links
wie [Beispiel](/archiv) und Aufzählungen funktionieren wie gewohnt.

## Eine Zwischenüberschrift

Inline-Mathematik wie $E = mc^2$ und abgesetzte Formeln:

$$
\frac{\partial u}{\partial t} = D\,\nabla^2 u
$$

Ein Bild einfügen: die Bilddatei in denselben Ordner wie diese `.md`-Datei legen
und relativ verlinken (führe das `./` mit an). Beispiel-Syntax:

```markdown
![Bildunterschrift bzw. Alt-Text](./mein-bild.png)
```

(Als Code-Block dargestellt, damit die Vorlage ohne echte Bilddatei baut — beim
echten Beitrag die Zeile ohne ``` verwenden, sobald das Bild im Ordner liegt.)

Und eine Fußnote im Text.[^1]

[^1]: Der Text der Fußnote.
