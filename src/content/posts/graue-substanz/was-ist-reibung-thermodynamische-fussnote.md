---
title: "Was ist Reibung? Thermodynamische Fußnote"
description: "Gleich zur richtigen Antwort: Entgegen aller praktischen Vorstellungen – von romantischen zu schweigen – übertragen wir nicht Wärme sondern leisten Arbeit an einem Körper, wenn wir ihn reiben."
pubDate: 2014-10-13
section: graue-substanz
lang: de
slug: was-ist-reibung-thermodynamische-fussnote
readingTime: ≈ 7 Min. Lesezeit
eyebrowDot: grey-matter
standfirst: "Überträgt man Wärme, wenn man an einem Körper reibt? Eine beliebte Pfrüfungsfrage, an der Studierende regelmäßig scheitern, weil der Wärmebegriff Schwierigkeiten macht."
---

Gleich zur richtigen Antwort: Entgegen aller praktischen Vorstellungen – von romantischen zu schweigen – übertragen wir nicht Wärme sondern leisten Arbeit an einem Körper, wenn wir ihn reiben. [So ist die Definition der Wärme](https://scilogs.spektrum.de/graue-substanz/was-ist-waerme-thermodynamische-fussnote/), beziehungsweise der Größe $Q$, die wir Wärme nennen.

Dabei ist es nicht die eng begrenzte Definition der Größe $Q$ sondern ihr Benennung als „Wärme“, die ganz natürlich Schwierigkeiten bereitet. Denn sie steht der umgangssprachlich geprägten Intuition entgegen. Das darf man zumindest einmal vermuten. Natürlich müsste man es empirisch nachweisen. Auf die Umgangssprache komme ich ganz am Ende nochmal zurück.

Um das Thema Reibung ein wenig anschaulicher zu erklären, wollte ich wie immer nach frei verfügbaren Bildern im Internet suchen. Nach Eltern, die ihr Kind nach dem Duschen mit einem Handtuch abtrocknen und warm reiben. Ein Sekunde später habe ich es mir anders überlegt.

## Nicht $Q$ sondern $W$

Stattdessen fange ich mit dem ersten Hauptsatzes der Thermodynamik an. Der sagt, dass sich die innere Energie $\Delta E$ des nach der Dusche frierenden Kindes (es wurde natürlich am Ende eiskalt abgeduscht!) nur durch Arbeit $W$ und durch Wärme $Q$ ändern lässt. Etwas drittes gibt es nicht, kurz&knapp: $\Delta E=W+Q$.

Wenn das saubere Kind nun aufgewärmt, im Bademantel isoliert und mit einem Glas Milch in der Hand Sandmänchen schaut, hat die Mutter durch ihr Trockenreiben zuvor Arbeit verrichtet jedoch damit keine Wärme übertragen. So nüchtern müssten Physikerinnen die Situation beschreiben. Vielleicht würden einige gestresste Eltern sogar noch mit fast geschlossenen Lippen langsam ausatmend zustimmen, doch in der Regel haben wir ein völlig anderes alltägliches Verständnis von dem Begriff Wärme.

## Dissipation gehört zu Reibung

Die Arbeit der Mutter wird dissipiert. [Dissipation gehört unmittelbar zur Reibung](https://www.youtube.com/watch?v=bqQhExE7Bps). Wärme gehört nicht unmittelbar zur Reibung. Man könnte auf die Idee kommen, die Reibung geht in thermische Energie über, was wiederum – und an dieser Stelle würde es zumindest ungenau, wenn nicht gar falsch, wie weiter unten erklärt – Wärme sei. Um den Anfang des Arguments zu veranschaulichen, der Studierende zuverlässig in die Irre führt, komme ich nochmal auf das Glas Milch zurück. Die Milch in dem Glass ist aus guten Gründen keine Glasmilch.

> Wir ersparen uns viele Worte, wenn wir auf nutzlose Differenzierungen verzichten. Es ist zwar oft bequem, kurz von Flaschen- oder Tütenmilch zu sprechen, aber ziemlich unnütz, das Umfüllen oder Trinken deswegen als Milchumwandlung zu formulieren und den Inhalt des Trinkglases oder des Magens als besondere Milchformen zu definieren. Bei der Energie ist es kaum anders. Die sauberste, wenn auch nicht die bequemste Lösung ist der Verzicht auf alle Energieformen. Natürlich dauert es, wie bei einem Patienten, der nach langem Krankenlager zum ersten Mal seine Krücken aufgibt, bis man sich an den neuen Zustand der Freiheit gewohnt und auch schwierige Stolperstrecken unbeschadet zu überwinden gelernt hat. [Georg Job†]

So werden die Energieformen zu Altlasten der Physik erklärt.† Genau in diesem Sinne ist der Begriff „thermische Energie“ an dieser Stelle unnütz, denn er führt zu falschen weiteren Vorstellungen.![Joule_Apparatus](/graue-substanz/files/Joule_Apparatus.jpg)

Die Situation ändert sich nicht, ja sie wird sogar verständlicher, wenn die Reibung nicht an der Systemgrenze stattfindet. In der Tat darf man in einer Prüfung die Eingangsfrage als *ill-defined* abtun, da die Arbeit an der Systemgrenze geleistet wird. Das heißt aber bloß, wir können nichts weiter ausrechnen. Die Tatsache, dass Reibung nichts mit Wärme zu tun hat, bleibt davon unberührt und sollte in der Prüfung auch erwähnt werden. Aber Vorsicht!

Verlegen wir zunächst also die Systemgrenze weiter nach außen. Wir schauen nicht auf das Kind, wobei Mutter mit Handtuch dessen Umgebung darstellten. Wir schauen auf das Badezimmer mit Kind und Mutter drin.

Nur ein wenig abstrahiert ist das vergleichbar mit dem rechts abgebildeten Joule-Apparat. Die Arbeit wird nun *vollständig* im System also im Badezimmer bzw. Joule-Apparat dissipiert. Jetzt kann man rechnen! (Was ich hier nicht tun will.)

## Irreversible Wärme ist keine Wärme sondern alias für dissipierte Arbeit

Warum darf man nicht sagen, die Arbeit wird in Wärme umgewandelt? Man könnte das sogar in der Tat so sagen, aber nur, wenn man einen entscheidenden Zusatz macht.

Die Reibungsarbeit erhöht die innere Energie. Es gibt nun die Möglichkeit, diese dissipierte Arbeit $W$ als *irreversible* Übertragung von Wärme ($Q_{ir}$) zu umschreiben. Warum man das tun sollte? Dafür gibt es einen und nur einen Grund: Weil man den Zugewinn an Entropie $S$  über $S=\int \frac{\delta Q}{T}$ ausrechnen soll – und dafür braucht man ein $Q$, das über die Systemgrenze übertragen wird aber danach nicht im System enthalten ist!

Die Größe $Q$ im ersten Hauptsatz ist allein das, was in der Physik im konkreten Sinne als Wärme bezeichnet wird. Diese Größe ist immer die reversible Wärme ($Q_{rev}$). Die Größe $Q_{ir}$ ist eine Stellvertretergröße, sie ist nicht Wärme selbst! Sie ist ein Äquivalent, das man für eine Berechnung mittels $S=\int \frac{\delta Q}{T}$ heranziehen kann. Die Größe $Q_{ir}$ ist in diesem Sinn nichts als eine Abkürzung. Denn eigentlich sucht man nach einem thermodynamischen Prozess, der den gleichen Anfangs- und Endzustand hat, wie der Prozess der inneren (d.h. vollständig im System dissipierten) Reibung. Dieser Ersatzprozess erlaubt es, die Entropie $S$ zu berechnen. Statt über diesen Ersatzprozess nachzudenken (was man fast ebenso leicht tun könnte), geht es noch schneller einfach $Q_{ir}=W_{dissipiert}$ anzusetzen.

Wer über über Thermodynamik nachdenkt, kommt nicht umhin festzustellen, dass wir im Prinzip das Pferd von hinten aufzäumen. Wir beginnen mit $Q$ im ersten Hauptsatz und kommen darüber, nämlich über $\int \frac{\delta Q}{T}$, zu der Entropie $S$. Das ist bedauerlich.

Richtig (sowohl im Sinne von grundlegender wie auch historisch entstanden) wäre es, mit dem zweiten Hauptsatz und der Entropie $S$ zu beginnen und über $\delta Q = T dS$ die Größe $Q$ zu bestimmen (wenn man sie denn anführen möchte). Die Reihenfolge der Hauptsätze führt an dieser Stelle aber zu weit.

## Umgangssprache

Selbst wenn man mit Entropie $S$ beginnt und damit zu $Q$ kommt, bleibt die Frage, wie man diese Größe benennt. Deswegen sollte man zum Abschluss nochmal auf die Umgangssprache kommen.

Umgangssprachlich kann und wird man „Arbeit„ und „Wärme„ unterschiedlich nutzen.

„Der Polizist leistet Arbeit.“

„Die Meeresströmung enthält Wärme.“

Dass hingegen etwas „Arbeit enthält“ scheint mir weniger üblich im Sprachgebrauch, abgesehen von der Metapher „da steckt viel Arbeit drin“. Dass „Wärme geleistet wird“ scheint mir noch unüblicher.

Durch diese sprachliche Unterscheidung erscheint es dem Anfänger auch im physikalischen Sinn möglich, dass an einem System Arbeit *geleistet* wird, z.B. durch Reibung, und es deswegen nun mehr Wärme *enthält*.

In der Physik stehen allerdings Wärme $Q$ und Arbeit $W$ in direkter Konkurrenz zueinander. Sie stehen in einem entweder-oder-Verhältnis, wie etwa „spazieren“ und „rennen“. Wenn eine Wegstrecke zurückgelegt wurde, kann man einen Teil davon rennen, den Rest spazieren. Man kann aber nicht ein Stück gleichzeitig rennen und spazieren.

Hinzu kommt, dass in der Physik „Wärme“ auch als Oberbegriff gebraucht wird. Zumindest in der zusammengesetzten Form „Wärmelehre“, die sicher nicht die allein die Lehre von $Q$ ist sondern auch (und mehr noch) von Energie, Entropie und der Temperatur. Früher war es üblich „Wärme“ nur als Oberbegriff zu gebrauchen und  $Q$ als „Wärmemenge“ zu bezeichnen (was allerdings für eine Prozessgröße auch ungewöhnlich klingt, da „Menge“ eine Erscheinungsform nahelegt).

Das Phänomen der Reibung zeigt vielleicht am deutlichsten, dass es ein Problem ist, dissipierte Arbeit und Wärme neutral unter dem Oberbegriff Wärme zusammenzufassen. Die Frage, die gestellt werden muss, ist, ob wir „Wärme“ als Oberbegriff strikt vermeiden oder ob wir $Q$ mit „Wärme“ richtig benennen?

## 

## Fußnote zu Fußnote

† Das Zitat stammt von Georg Job aus: *F. Herrmann und G. Job: Altlasten der Physik, AULIS Verlag Deubner (2002)*, und ist hier als [pdf hier verlinkt](http://www.physikdidaktik.uni-karlsruhe.de/altlast/).

Ich habe bisher nur sehr wenige Kapitel dieser „Altlasten“ gelesen. Mit dem damit verbundenen Karlsruher Physikkurs (KPK) habe ich mich gestern erstmals und nur durch die Sekundärliteratur beschäftigt. Prof. Herrmann schreibt auf der verlinkten Seite: „Wer KPK-Gedankengut entdeckt, ist aufgefordert, es der DPG zu melden“. In der Tat gibt es KPK-Gedankengut bei mir im Blog zu entdecken. Denn soweit ich es gelesen habe, ist die Thermodynamik einwandfrei und insbesondere die Verwendung von „Wärme“ als Oberbegriff auch für Entropie finde ich sehr spannend. [Also nur zu](http://www.dpg-physik.de/dpg/kontakt-2.html).

Dank eines Leserkommentar zum letzten Beitrag bin ich auf diese Diskussion zum KPK aufmerksam geworden. Wesentliche Teile dieses sowie älterer wie noch folgender Beiträge habe ich im Juli in Toronto geschrieben. Sie decken sich auffällig mit der Sicht insbesondere von Georg Job und anderen Thermodynamikern, die sich über die Grundlagen Gedanken gemacht haben.

## Bildquelle

[Joule Apparatus CC BY-SA 3.0, Dr. Mirko Junge](http://commons.wikimedia.org/wiki/File:Joule_Apparatus.jpg)
