---
title: "Wie Mercators Karte ins Gehirn kam (4)"
description: "Die benötigte Mathematik war, als die Karte in die Lehrbücher kam, also Anfang des 20. Jahrhunderts, längst weit entwickelt."
pubDate: 2014-02-24
section: graue-substanz
lang: de
slug: wie-mercators-karte-ins-gehirn-kam-4
readingTime: ≈ 5 Min. Lesezeit
eyebrowDot: grey-matter
---

![loxodrome](/graue-substanz/files/loxodrome.png)[Vom Schlachtfeld kam die Karte des Gesichtsfeldes in die Lehrbücher der Augenheilkunde und Neuroanatomie](https://scilogs.spektrum.de/graue-substanz/wie-mercators-karte-ins-gehirn-kam-3/) – noch ganz ohne mathematische Fähigkeiten, die wir jedoch bald in verschiedenen Formen heranziehen müssen, um eine ganz besondere Eigenschaft dieser Karte zu erkennen, nämlich Loxodrome (gestrichelte Kurve im Bild) als gerade Linien abzubilden. D.h. wir brauchen Mathematik, um zu Mercators Karte im Gehirn zu gelangen.

Die benötigte Mathematik war, als die Karte in die Lehrbücher kam, also Anfang des 20. Jahrhunderts, längst weit entwickelt. In ihrer frühsten Form stammt sie von Augustin-Louis Cauchy. Die Rede ist von der Funktionentheorie, die Cauchy ab 1814 entwickelte und in diesem Jahr auch schon die Cauchy-Riemann-Differentialgleichungen aufstellte. Diese Gleichungen werden uns begegnen. Aber langsam.

Es lohnt die Gegebenheiten der letzten drei Beiträgen, die wir zur mathematischen Modellbildung benötigen, vorab eigens in diesem vierten Teil zusammenzufassen und dabei zumindest andeuten, welchen Weg wir gehen.

## Flache Viertelkugel

Anfang des 20. Jahrhundert war klar, dass je eine neuronale Karte einer Gesichtsfeldhälfte mit bestimmter Orientierung eingefaltet in einer Furche (Sulcus calcarinus) in den beiden Hemisphären der Großhirnrinde liegt. Genau genommen existieren also zwei spiegelsymmetrische Mercator-Karten als Abbildung von je einer Viertelkugel.

Das Gebiet um diese Furche kennzeichnete der Neuroanatom Brodmann als Area 17 (A17). A17 nimmt je etwa die Fläche einer halben Kreditkarte ein, ist ca. 2 Millimeter dick und liegt an der Innenseite (medialen Seite) des Hinterhauptslappen des Gehirns. Die beiden Areale liegen sich also an der medialen Seite auf den beiden Hemisphären gegenüber, getrennt nur durch die Hirnhäute und die Hirnlängsfurche. A17 wird auch als primäre Sehrinde oder V1 (V für visual) bezeichnet. Wir denken uns V1 zunächst als intrinsisch flach, das heißt V1 lässt sich ohne Verzerrung auffalten (das geht eigentlich nicht, worauf wir zurückkommen müssen).

## Ein leere Karte

Vor uns liegt nicht nur eine flache Karte sondern vor allem eine bisher noch (ohne Mathematik) „leere“ Karte. Dass sie vor uns liegt soll sagen, dass wir vorerst ihren Ort im Gehirn nicht mehr betrachten. Ebenso wenig wird entscheidend sein, dass wir diese noch leere Karte im Gehirn schon „eingenordet“ haben.1

Wie schon gesagt: Wir werden später wieder auf den Ort im Gehirn und die Orientierung relativ zum den Gehirnfalten zurückkommen. Denn in Bezug auf die intrinsische Krümmung, die sich eben nicht verzerrungsfrei auffalten lässt, ist das relevant.

Leer ist die Karte, weil noch nichts in ihr eingezeichnet ist. Was eingezeichnet sein soll? Natürlich kein Bild das im Gesichtsfeld gerade erscheint sondern die Koordinatenlinien des Gesichtsfeldes. Genau wie die Längen- und Breitengrade einer Landkarte bestimmen die Koordinatenlinien des Gesichtsfeldes die gesuchte neuronale Karte vollständig.

## Zwei Modelle

Die mathematischen Methoden etwas mehr über die Karte zu erfahren kommen in zwei Varianten. Beide führen unabhängig zu mathematischen Modellen. Diese Modelle beschreiben formal das Koordinatensystem in der Karte oder (was alternativ dazu ist) wie sich der Maßstab kontinuierlich von Ort zu Ort der Karte ändert. (Ein Hinweis für die Ungeduldigen, die sich selbst vorab an eine Lösung wagen wollen: genau hier lünkern uns partielle Ableitungen und die komplexe Differenzierbarkeit entgegen, die durch die Cauchy-Riemann-Differentialgleichungen verbunden sind.)

Die erste Methode liefert über einen datengetrieben Ansatz ein Modell. Dies behandeln wir im nächsten Beitrag ausführlich und dazu reichen noch Ableitungen in einer rellen Variablen. Also dass die Ableitung der Funktion *f(x)=x*2 etwa *f'(x)=*2*x* ist, das wird wichtig sein zu wissen. Und von f*(x)=x*3 ist die Ableitung *f'(x)=*3*x2*oder von **f(x)=x**-2 ist die Ableitung **f'(x)=**-2**x**-3. Das Muster is simple ([und trotzdem mache ich gerne Fehler](https://scilogs.spektrum.de/graue-substanz/wie-mercators-karte-ins-gehirn-kam-4/#comment-4199)). Gibt es auch eine Ableitung, so dass **f'(x)=x-1** ? Hier stutzen vielleicht einige kurz – aber klar diese Stammfunktion ist  **f(x)=**log(**x**)**. —** Mit diesem Wissen überstehen wir zumindest den nächsten Beitrag.

Ein zweiter Modellansatz zieht aus (zunächst) plausiblen Annahmen einen eindeutigen Schluss auf eine Karte. Dieser deduktive Schluss von den gegebenen Prämissen auf die zwingenden Konsequenzen darf natürlich nicht im Widerspruch zu dem ersten, empirischen Modellansatz stehen. Darauf schauen wir im übernächsten Beitrag. Erst hier kommen die Cauchy-Riemann-Differentialgleichungen vor.

Doch schauen wir noch ein letztes mal kurz zurück: Im Zuge der Empirie des Schlachtfelds schloss man darauf, dass das Zentrum des Gesichtsfeldes relativ zur Peripherie überproportional in der neuronalen Karte repräsentiert ist ([Teil 3](https://scilogs.spektrum.de/graue-substanz/wie-mercators-karte-ins-gehirn-kam-3/)). Der Maßstab der Karte ist also nicht konstant. Die Karte repräsentiert das Zentrum des Gesichtsfeldes detailreicher. Das liegt nicht nur nahe, es ist sogar zwangsläufig so, dass ein variierender Maßstab unvermeidbar ist. Denn das Gesichtsfeld hat eine Kugelform, die neuronale Karte ist dagegen flach ([Teil 2](https://scilogs.spektrum.de/graue-substanz/wie-mercators-karte-ins-gehirn-kam-2/)). Genau das war auch Mercators Problem. Eine flache Karte einer Kugel besitzt niemals einen konstanten Maßstab, sie kann nicht längentreu sein. Mercator hätte allerdings flächentreu sein Karte ausrichten können, er wählte jedoch eine bestimmte winkeltreue Karte, weil nur mit dieser leicht zu navigieren war ([Teil 1](https://scilogs.spektrum.de/graue-substanz/wie-mercators-karte-ins-gehirn-kam-1/)).

Das ist die Ausgangslage.

[ [→ Fortsetzung](https://scilogs.spektrum.de/graue-substanz/wie-mercators-karte-ins-gehirn-kam-5/) ]

## Fußnote

1 An dieser Stelle kann und sollte ich vielleicht präziser sein. Beim Einnorden einer Landkarte legen wir die Nord-Süd- bzw. West-Ost-Achse *relativ* zur den tatsächlichen Achsen fest. Wenn wir später Mercators Karte mit der des Gesichtsfeldes vergleichen, stellen wir fest, dass die “Nord-Süd-Achse” bei der neuronalen Karte der Lage des Horizontes des Gesichtsfeldes entspricht. Genauer gesagt der neuronalen Repräsentation dieses visuellen Horizontes. Und zwar in der Richtung vom Zentrum zur Peripherie.  Der West-Ost-Achse entspricht die Achse der Quadranten, also der oberen und unteren Hälfte eines halben Gesichtsfeldes. Eingenordet wurde diese neuronalen Karte allerdings *relativ* zu den anatomischen Hauptrichtungen und nicht zu den tatsächlichen Gesichtsfeld. Das ist ein Unterschied. Allerdings ist unser Gesichtsfeld relativ zu den anatomischen Hauptrichtungen im Prinzip auch festgelegt, wenn wir für den Moment von den Freiheitsgraden absehen, mit denen wir unsere Rollen rollen können.

## Bildquelle

Wikipedia: [Rhumb line](http://en.wikipedia.org/wiki/Rhumb_line)
