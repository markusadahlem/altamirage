---
title: "Kipp-Punkte im Gehirnklima"
description: "Stellen Sie sich vor, man würde versuchen möglichst viele der messbaren Eigenschaften des Klimasystems der Erde zu messen, in Wetterstationen vor Ort, auf hoher See, mit Satellitenbilder vom Weltraum."
pubDate: 2011-09-12
section: graue-substanz
lang: de
slug: kipp-punkte-im-gehirnklima
readingTime: ≈ 5 Min. Lesezeit
eyebrowDot: grey-matter
standfirst: "Die gefürchteten, in der Klimaforschung Kipp-Punkte genannten, abrupten Übergänge begegenen uns in der Hirnforschung wieder bei paroxysmalen Krankheitsverläufen."
---

![](./_kipp-punkte-im-gehirnklima-posterlc2011.jpg)

Stellen Sie sich vor, man würde versuchen möglichst viele der messbaren Eigenschaften des Klimasystems der Erde zu messen, in Wetterstationen vor Ort, auf hoher See, mit Satellitenbilder vom Weltraum. Kein Weg zu weit, keine Kosten zu hoch. Es geht um das Klima. Diese Daten würden dann Fachleute bewerten in dem sie darauf gucken, ganz ohne Computermodell. Wie gut wären Vorhersagen dann?

In diesem dritten Teil (s. [Teil 1](https://scilogs.spektrum.de/blogs/blog/graue-substanz/2011-09-01/gesunde-kranke-neue) und [Teil 2](https://scilogs.spektrum.de/blogs/blog/graue-substanz/2011-09-03/migraene-ctrl-alt-del), plus einem [Prolog](https://scilogs.spektrum.de/blogs/blog/graue-substanz/2011-08-25/psychisch-oder-psychiatrisch)) zu dem Workshop "*Computational Neuroscience and the Dynamics of Disease States*" komme ich auf Migräne und Epilepsie zu sprechen. Es geht um das Klima im Gehirn.

Vorab schrieb ich, dass beide Gemeinsamkeiten haben, auf zellulärer Ebene, im Krankheitsverlauf und in den Fragen, die wir mit den jeweiligen Computermodelle beantworten wollen.

Auf zellulärer Ebene kennzeichnen sich gewisse Phasen der Epilepsie und Migräne durch extrem hohe Zellaktivität aus, in denen wesentliche Teile der vorhandenen Energie der Zellbatterieren (chemische Gradienten über der Zellmembran) verbraucht wird. 

Zudem ist bei beiden der Krankheitsverlauf anfallsartig (paroxysmal). Was jeweils zu der Frage führt, wie beginnt der Übergang von normaler zur pathologischer Zelllaktivität und wie hört diese wieder auf, denn die Anfälle enden ja auch ohne Intervention, zum Glück, aber wieso eigentlich?

Genau diese Fragen kann man mit Computermodellen beantworten. Das klingt jetzt vielleicht zu sehr nach Frage und Antwort. Gemeint ist eher: Idee bekommen, evtl. Forschungsantrag schreiben und jahrelange Arbeit, dabei u.a. sich auf Workshops austauschen und Beiträge im Blog schreiben, um sich breiter auszutauschen (aber auch um Gedanken beim Niederschreiben neu zu reflektieren).

Am Anfang stehen immer die mathematischen Gleichungen, die auf Basis der Physiologie hergeleitet werden müssen. Das ist der Teil der am meisten von allem erfordert, Fachwissen, mehr noch fachübergreifendes Wissen und Erfahrung mit einen Schuss Intuition, denn man muss entscheiden, was man bei der Modellierung einer Erkrankung getrost weglassen kann ([s. Kommentar zum 1 Teil](https://scilogs.spektrum.de/blogs/blog/graue-substanz/2011-09-01/gesunde-kranke-neue#comment-15025)).

Interessanterweise kann ich, selbst wenn ich die mathematischen Gleichungen noch nicht kenne, doch die möglichen Mechanismen aufzählen, die in Frage kommen für den Übergang des Gehirns in die krankhafte Dynamik des Anfalls und wieder heraus. Vier Möglichkeiten wurden auf dem Workshop diskutiert. Sie haben jeweils etwas andere Charakteristika, was Folgen hat, z.B. in der Anfallsdauer und Anfallsverteilung der akuten Attacken.

Diese Folgen, die sich allein aus den Eigenschaften der prinzipiell möglichen Übergänge herleiten, bringen mich zu einem zentralen Aspekt dieser Methodik. Deswegen eine Bemerkung dazu vorab, bevor ich dann die verschiedenen Übergänge aufzähle. Es wird eine Brücke geschlagen! Wenn Übergänge fundamentale Eigenschaften der zellulären Physiologie sind, deren Folgen sich im Krankheitsverlauf zeigen, dann kann man die Vorhersagen der zellulären Modellierung mittels klinischen Daten des Krankheitsverlaufs (Anfallsdauer und Verteilung) eventuell1 überprüfen (vgl. Suffczyński et al, 2004).

Was sind das für vier Übergänge?

Es folgt nun eine sehr von der Krankheit abstrahierende Erklärung, denn diese Übergänge sind universell. Solche Übergänge werden in der Klimaforschung z.B. gerne als Kipp-Punkte bezeichnet ([siehe Beispiel hier](https://scilogs.spektrum.de/wblogs/blog/klimalounge/mechanismen/2011-02-11/kipp-punkte-in-der-arktis)), wobei die Analogie an einer Stelle nicht stimmig scheinen mag, sie es aber ist. Bei der Klimaentwicklung wird meist an langsame Veränderungen (Drift) von klimarelevanten Parametern gedacht, wobei an einer bestimmten Stelle dann das Klima abrupt *kippt* und dies irreversible Auswirkungen hat. Das Gehirn wiederum wird meist als ein stationäres System (keine Drift) betrachtet, dass durch Trigger (Rauschen oder normale Varianz physiologischer Größen) in den Krankheitszustand hinein und so – oder auch anders – aus diesem auch heraus kippen kann (reversible, zumindest bei paroxysmalen Hirnkrankheiten). Der scheinbare Unterschied der Übergänge in Klima-und Gehirnmodellen ist aber kein prinzipieller, zumindest nicht in der Sprache der Mathematik. Gar nicht so selten sitzt der Klimaforscher [auf einem Workshop](http://syncline.pik-potsdam.de/) neben dem Hirnforscher oder man ist gleich beides in Personalunion.

Zählen wir nun auf: Vormals gesunde Zustände2 können durch äußere Einflüsse verformt werden (Bifurkationen), es könnten der gesunde und kranke Zustand zusammen existieren und man springt von einem zum anderen über (Bi- oder Multistabilität), es könnten gesunde und krankhafte Phasen beide Teil einer Trajektorie sein (Intermittenz), oder ein Anfall wird angeregt indem der Gesunde Zustand über eine Schwelle angehoben wird und diese Störung zwar abklingt aber erst nach einer Exkursion im Phasenraum (transiente Dynamik).

Diese abstrakten Erklärungen für Übergänge sind ganz ohne Vorkenntnis von dynamischen Systemen nicht leicht zu verstehen.

Mein Vortag auf der Tagung lautete *"Transient patterns in a subexcitable medium and their relation to migraine diagnostics and non-medical treatment"*. Ich arbeite also zur Zeit an einer Theorie, die den vierten Übergang für Migräne postuliert, eine transiente Dynamik. Bei Epilepsie wird eher von Übergängen mittels Bifurkationen oder Bistabilität ausgegangen (Suffczyński et al, 2004), wobei es nicht *eine* Epilepsieerkrankung gibt und somit auch nicht notwendigerweise nur einen Mechanismus3.

Ich erachte die mathematische Modellierung von Hirnkrankheiten als eine bedeutende Entwicklung auf diesem klinischen Forschungsgebiet, vergleichbar mit der der nichtinvasiven Bildgebung, mit der sie eng verzahnt werden sollte, weil gerade ohne eine mathematische Modellierung diese in einer Sackgasse bunter Bilder stecken bleibt.

**Fußnoten**

1 Ich formuliere das bewußt sehr vorsichtig, denn einige Übergänge unterscheiden sich dann doch nicht hinreichend und es gibt die Problematik, dass krankhafte Dynamik manchmal klinisch still verläuft (keine Symptome auftreten), ohne das wir bisher verstehen warum. Trotzdem ist diese Brücke da.

2 Der Begriff Zustand ist hier im abstrakten mathematisch-physikalischen Sinne gebraucht. Wenn ich also von einer Verformung von gesunden zu kranken Zuständen spreche ist dies mit dem alltäglichen Gebrauch von "Zustand" leider wohl wenig hilfreich und muss als abstraktes Konzept hingenommen werden.

3 In der Tat könnte die Erkenntnis, dass es möglicherweise verschiedenen Übergänge gibt, die Diagnoseformen der Migräne beeinflussen. Daher auch der Hinweis auf die Diagnoseform im Vortragstitel. Krankheiten nach Symptom (wie bisher), oder Ursache (ätiologisch), oder nach Entstehung (Pathogenese) zu klassifizieren, ist aber ein ganz eigenes Thema, das einen eigenen Beitrag bedarf.

**Literatur**

[1] Suffczyński, P., Kalitzin S. & Lopes da Silva, F.H. Dynamics of non – convulsive epileptic phenomena modeled by a bistable neuronal network. *Neuroscience*, **126**: 467-484, 2004.

**Link**

Kurze URL zu diesem Beitrag

http://goo.gl/02N0m
