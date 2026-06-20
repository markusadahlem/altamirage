---
title: "Arzt oder Computer – Wer macht die bessere Diagnose?"
description: "Viel spricht dafür, dass Watson einmal Ärzten bei der Diagnose helfen kann."
pubDate: 2015-10-11
section: graue-substanz
lang: de
slug: arzt-oder-computer-wer-macht-die-bessere-diagnose
readingTime: ≈ 2 Min. Lesezeit
eyebrowDot: grey-matter
---

Viel spricht dafür, dass Watson einmal Ärzten bei der Diagnose helfen kann. Watson ist ein Computer, ein Supercomputer. Er spielt besser als der Mensch Schach, schlägt ihn auch beim dem mit Ironie, Witz und Wortspielen gespickten Quiz „Jeopardy!“. Was aber kann ein PC mit Windows XP? Er kann Migräne diagnostizieren. Das zeigt eine neulich erschienene Publikation [1].

Ein recht einfacher Algorithmus kann anhand von 20 Merkmalen der Symptome einer Kopfschmerzattacke Migräne, Spannungskopfschmerzen, trigemino-autonome Kopfschmerzen und andere primäre Kopfschmerzen auseinander halten.

Genutzt wird eine unüberwachte Lernmethode, der sog. Fuzzy C-Means Algorithmus, die unter den 20 Merkmalen eine Klassifikation nach häufigen Kombinationen vornimmt. [*Hier explizit Nachgetragen der Hinweis von Olaf Behrendt unten in den Kommentaren zur Qualität dieser Studie; 11.Okt. 14:20*]

Nun ist die Diagnose der primären Kopfschmerzen auch für Menschen auf den ersten Blick nicht wirklich eine schwierige Aufgabe. Doch gleicht [keine Attacke der anderen](https://scilogs.spektrum.de/graue-substanz/diese-woche-keine-drei-migraeneattacken-sind-gleich/). Warum es zu menschlichen Fehldiagnosen kommt, beschrieben die Autoren so:

*However, the diagnosis of the primary headache is still difficult for physicians due to its complex symptoms. None of the symptom features occur in all patients who meet a strict definition of the HIS* [sic, gemeint ist IHS, die International Headache Society] *primary headache and no single symptom is required for diagnosis. In other words, the primary headache is a complex mixture of symptoms with variable symptom profiles.*

Weil also kein Symptom bei allen Patienten einer primären Kopfschmerzenart notwendig auftritt, muss man die internationale Kopfschmerz-Klassifikation der Iiternationalen Kopfschmerzgesellschaft schon exakt kennen.

Ein weiteres Problem ist, dass die medizinischen Richtlinien sich immer mal wieder ändern. Gerade vollzieht sich der Übergang von der zweiten zur dritten Auflage mit einigen für die Diagnose durchaus relevanten Änderungen. Allerdings betreffen diese  Änderungen die Subtypen und Subformen der primären Kopfschmerzformen. Der Fuzzy C-Means Algorithmus hält nur die primären Kopfschmerzformen auseinander, aber eine tiefergehende Klassifikation ist meiner Ansicht nach auch mit einem Computer-Algorithmus leicht möglich.

Ständig sich ändernde Informationen sind eher ein Problem. Das ist der Punkt an dem IBM mit Watson ansetzt. Denn Watson kann die Richtlinie – also menschliche Sprache – lesen und deren Bedeutung „verstehen“:

*Tatsächlich verdoppelt sich die Menge an medizinischen Daten alle fünf Jahre. Ein Großteil dieser Daten ist unstrukturiert – und liegt häufig in natürlicher Sprache vor. Ärzte haben einfach nicht die Zeit, jede Fachzeitschrift zu lesen, die sie über die jeweils neuesten Fortschritte informiert – 81 Prozent der Ärzte verbringen eigenen Angaben zufolge nur maximal fünf Stunden pro Monat mit dem Lesen von Fachzeitschriften.*  
(zitiert von [hier](http://www-05.ibm.com/de/watson/gesundheitswesen.html))

Es wäre deswegen zukünftig sehr wünschenswert, intelligente Assistenzsysteme für Ärzte einzusetzen, ein Forschungsfeld an dem auch ich arbeite und zu dem es bald noch mehr im Blog geben wird. Die bessere Diagnose macht freilich immer noch der Arzt. Denn ein Computer macht strenggenommen nie eine Diagnose, sondern liefert dem Arzt die hierzu nötigen Informationen.

## Literatur

[1] Wu, Y., Duan, H., & Du, S. (2015). Multiple fuzzy c-means clustering algorithm in medical diagnosis. Technology and Health Care, 23(s2).
