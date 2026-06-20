---
title: "Never seen a neuron without being in contact to an ion reservoir"
description: "We have a new paper out: N. Hübel, E. Schöll, and M.A."
pubDate: 2014-05-04
section: graue-substanz
lang: en
slug: never-seen-a-neuron-without-being-in-contact-to-an-ion-reservoir
readingTime: ≈ 3 min read
eyebrowDot: grey-matter
---

We have a new paper out: N. Hübel, E. Schöll, and M.A. Dahlem, Bistable Dynamics Underlying Excitability of Ion Homeostasis in Neuron Models, [*PLOS Comp. Biol.* **10**, e1003551, 2014](http://www.ploscompbiol.org/article/info%3Adoi%2F10.1371%2Fjournal.pcbi.1003551). With this paper, we hope to set the stage for modeling a phenomenon known as “spreading depression”.

## Spreading depression is neither

It’s an unfortunate name because *spreading depression* is neither. It’s not a process that does spread out like perfume spreads around a room or a particle wave packet spreads out in free space. We would rather call it a *traveling wave,* that is, a propagating event that in a certain comoving coordinate system stays stationary. Anyway, we do not consider the spatial aspects of this phenomenon in this paper. We consider the local events that happen in a neuron during spreading depression.

It’s not (essentially) a “depression” either. This is a term that originally refers to the depression of electroencephalic activity. We can record spreading depression even if the electroencephalic activity is already depressed by other means. Besides the fact that the dynamics of spreading depresion is so slow—classified as ultra–slow or near–DC (direct current) activity—that spreading depression cannot normally be observed by electroencephalography (EEG) recordings, e.g. during migraine with aura, the most prominent occurrence of this phenomenon, because of unavoidable artifacts due to the resistance of the dura (thick outermost layer of the meninges that surrounds the brain).

## So what is spreading depression?

As I mentioned, we hope to set the stage [for future modeling](http://www.scilogs.com/gray-matters/when-neurons-let-off-steam/) by suggesting spreading depression is based on bistable homeostasis in neurons without ion reservoirs. When I presented this at a [CRCNS](http://www.nsf.gov/funding/pgm_summ.jsp?pims_id=5147) 2013 PI Meeting at MIT, Boston, last year, I could clearly see that some physiologists thought that is a bit insane as nobody has ever seen this bistability. Well, to me that means there is hope that our suggestions is right.

Of course we have never seen this, because we have never seen a neuron not being in contact to an ion reservoir. And I’m not sure we ever will (that’s a question for an experimentalist). We cannot not simply prepare a neuron as a *closed system* (in a thermodynamic sense, where we do not allow ions and other molecules to pass the boundary into the system), because neurons need chemical energy released by hydrolysis of ATP, a molecule the components of which (glucose and oxygen or lactate) have to continuously be provided by the surroundings of the neuron. Together with these components also ions will be supplied.

But if we do a thought experiment or rather a computer model, we can actually calculate what happens. We can allow only chemical energy but no ions to be supplied to a neuron. If we do this, we see a bistability in ion homeostasis of neurons.

[Read the full paper for more details.](http://www.ploscompbiol.org/article/info%3Adoi%2F10.1371%2Fjournal.pcbi.1003551)

So spreading depression is a traveling wave based on bistable dynamics, which does not make for a good name of this phenomenon either. Thus we stay with “spreading depression”. A last interesting fact: there actually is a mathematical model described in an unpublished manuscript by Andrew Huxley. The model is exactly this, describing SD front dynamics as a traveling wave based *ad hoc* bistable dynamics. See:  B. Grafstein; Neuronal release of potassium during spreading depression. M.A.B. Brazier (Ed.), Brain Function, Cortical Excitability and Steady Potentials, University of California Press, Los Angeles (1963), pp. 87–124.
