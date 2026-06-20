---
title: "Fusing Neuroscience with Engineering"
description: "What does it take to fuse neuroscience with engineering?"
pubDate: 2012-07-26
section: graue-substanz
lang: en
slug: fusing-neuroscience-with-engineering
readingTime: ≈ 2 min read
eyebrowDot: grey-matter
standfirst: "Though it’s neither science fiction nor horror, sticking electrodes into the brain has still three major problems: hardware, wetware, and—software."
---

What does it take to fuse neuroscience with engineering? Various invasive human brain stimulation techniques are available. They alter brain activity through the use of electrical and magnetic stimulation.

Let us look at headaches first. Headaches are not generally considered appropriate for invasive neurosurgical therapy, but when all else fails—preventives, abortives, and pain management—invasive brain stimulation techniques are considered. For example occipital nerve stimulation (ONS) or hypothalamic deep brain stimulation (DBS).

Better known examples for deep brain stimulation are treatment-resistant movement disorders, such as Parkinson’s disease. This is thalamic DBS but the difference between the treatment of movement disorders and headaches is not merely the precise stereotactic placement of minuscule electrodes into the brain’s target area. In addition to being on target, the stimulation protocol needs to be optimized to modulate the distinct abnormal patterns of neural activity within the particular network. This optimization can be done either empirically or quantitatively with model-based methods. Simply said, given the hardware works well with the wetware, what is the optimal software? To answer this, we need models, mathematical models that is.

Mathematical models of the neural tissue surrounding electrodes are given by integro-differential equations. Network dynamics are investigated with stability analysis, for instance with a formalism called master stability function that allows one to separate the dynamics at the network nodes from the network topology. And, finally, the influence of electric fields applied in a closed loop configuration can be described by control theory using these models. So there is quite some development of mathematical tools. Steven J. Schiff (Director of Penn State Center for Neural Engineering) and author of the recent book, [„Neural Control Engineering“ (MIT Press)](http://www.amazon.com/Neural-Control-Engineering-Intersection-Computational/dp/0262015374 "Neural control engineering") remarks: „It seems incredible that the tremendous body of skill and knowledge of model-based control engineering has had so little impact on modern medicine. The timing is now propitious to propose fusing control theory with neural stimulation for the treatment of dynamical brain disease.“

For model-based control, devices need not only be able to stimulate but also monitor neural activity, either with the electrodes in place or with additional encapsulated microsensors (lab-on-a-chip). Building such combined intelligent devices is the paramount bioengineering task at the emerging intersection between neuroscience and control theory. Mastering this in the future is what it will take to make an impact. It’s neither science fiction nor horror, but it needs to be recognized that the three major problems: hardware, wetware, and software are highly interlinked and, to my mind, more attention should be directed at cross-disciplinary research, which will be a focus of this blog.

I am happy that finally SciLogs.com gained some momentum. If this is the first post you read, you may want to find out more about me and my scientific background from my [home page](https://sites.google.com/site/markusadahlem/).

This text was written for a [Charité NeuroScience (CNS) Newsletter](http://www.medical-neurosciences.de/en/about_us/newsletter/) that will appear in one of the next issues.
