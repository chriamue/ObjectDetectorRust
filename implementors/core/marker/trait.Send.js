(function() {var implementors = {
"object_detector_rust":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"object_detector_rust/bbox/struct.BBox.html\" title=\"struct object_detector_rust::bbox::BBox\">BBox</a>",1,["object_detector_rust::bbox::BBox"]],["impl&lt;X, Y, C1, C2&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"object_detector_rust/classifier/struct.CombinedClassifier.html\" title=\"struct object_detector_rust::classifier::CombinedClassifier\">CombinedClassifier</a>&lt;X, Y, C1, C2&gt;",1,["object_detector_rust::classifier::combined_classifier::CombinedClassifier"]],["impl&lt;X, Y&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"object_detector_rust/classifier/struct.BayesClassifier.html\" title=\"struct object_detector_rust::classifier::BayesClassifier\">BayesClassifier</a>&lt;X, Y&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Y: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["object_detector_rust::classifier::bayes_classifier::BayesClassifier"]],["impl&lt;X, Y&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"object_detector_rust/classifier/struct.SVMClassifier.html\" title=\"struct object_detector_rust::classifier::SVMClassifier\">SVMClassifier</a>&lt;X, Y&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Y: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["object_detector_rust::classifier::svm_classifier::SVMClassifier"]],["impl&lt;X, Y&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"object_detector_rust/classifier/struct.RandomForestClassifier.html\" title=\"struct object_detector_rust::classifier::RandomForestClassifier\">RandomForestClassifier</a>&lt;X, Y&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;X: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Y: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["object_detector_rust::classifier::randomforest_classifier::RandomForestClassifier"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"object_detector_rust/dataset/struct.FolderDataSet.html\" title=\"struct object_detector_rust::dataset::FolderDataSet\">FolderDataSet</a>",1,["object_detector_rust::dataset::folder_dataset::FolderDataSet"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"object_detector_rust/dataset/struct.MemoryDataSet.html\" title=\"struct object_detector_rust::dataset::MemoryDataSet\">MemoryDataSet</a>",1,["object_detector_rust::dataset::memory_dataset::MemoryDataSet"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"object_detector_rust/dataset/struct.DummyDataSet.html\" title=\"struct object_detector_rust::dataset::DummyDataSet\">DummyDataSet</a>",1,["object_detector_rust::dataset::DummyDataSet"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"object_detector_rust/detection/struct.Detection.html\" title=\"struct object_detector_rust::detection::Detection\">Detection</a>",1,["object_detector_rust::detection::Detection"]],["impl&lt;W&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"object_detector_rust/detector/struct.BriefSVMDetector.html\" title=\"struct object_detector_rust::detector::BriefSVMDetector\">BriefSVMDetector</a>&lt;W&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["object_detector_rust::detector::brief_svm_detector::BriefSVMDetector"]],["impl&lt;W&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"object_detector_rust/detector/struct.HOGSVMDetector.html\" title=\"struct object_detector_rust::detector::HOGSVMDetector\">HOGSVMDetector</a>&lt;W&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["object_detector_rust::detector::hog_svm_detector::HOGSVMDetector"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"object_detector_rust/feature/struct.HOGFeature.html\" title=\"struct object_detector_rust::feature::HOGFeature\">HOGFeature</a>",1,["object_detector_rust::feature::hog_feature::HOGFeature"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"object_detector_rust/feature/struct.BriefFeature.html\" title=\"struct object_detector_rust::feature::BriefFeature\">BriefFeature</a>",1,["object_detector_rust::feature::brief_feature::BriefFeature"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"object_detector_rust/feature/struct.DummyFeature.html\" title=\"struct object_detector_rust::feature::DummyFeature\">DummyFeature</a>",1,["object_detector_rust::feature::DummyFeature"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"object_detector_rust/types/struct.Annotation.html\" title=\"struct object_detector_rust::types::Annotation\">Annotation</a>",1,["object_detector_rust::types::Annotation"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"object_detector_rust/types/struct.AnnotatedImage.html\" title=\"struct object_detector_rust::types::AnnotatedImage\">AnnotatedImage</a>",1,["object_detector_rust::types::AnnotatedImage"]],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"object_detector_rust/types/struct.ImageWindow.html\" title=\"struct object_detector_rust::types::ImageWindow\">ImageWindow</a>&lt;I&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["object_detector_rust::types::ImageWindow"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"object_detector_rust/window_generator/struct.PyramidWindow.html\" title=\"struct object_detector_rust::window_generator::PyramidWindow\">PyramidWindow</a>",1,["object_detector_rust::window_generator::pyramid_window::PyramidWindow"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"object_detector_rust/window_generator/struct.SlidingWindow.html\" title=\"struct object_detector_rust::window_generator::SlidingWindow\">SlidingWindow</a>",1,["object_detector_rust::window_generator::sliding_window::SlidingWindow"]]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()