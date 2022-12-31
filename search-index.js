var searchIndex = JSON.parse('{\
"object_detector_rust":{"doc":"Object Detector Rust 🔍","t":[3,3,2,6,12,11,11,11,11,0,12,11,11,11,11,12,0,11,11,11,11,0,0,0,11,11,0,11,11,11,11,11,11,12,11,11,11,11,0,0,11,11,11,11,11,11,0,11,11,11,11,11,11,11,11,11,11,0,11,11,11,11,11,11,3,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,3,8,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,8,8,3,3,3,10,11,10,11,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10,11,11,11,11,11,11,11,11,11,10,11,11,11,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,3,11,11,12,11,11,12,11,11,12,11,11,11,11,11,11,5,11,11,11,11,11,11,11,11,11,11,11,11,3,8,3,11,11,11,11,11,11,11,11,11,11,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,3,3,8,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,8,10,2,2,2,2,2,2,2,2,2,2,8,10,3,3,8,11,11,11,11,11,11,11,11,11,11,5,5,11,5,11,11,11,11,11,11,12,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,12,10,11,12,12],"n":["AnnotatedImage","Annotation","BBox","Class","annotations","approx_from","approx_from","approx_into","approx_into","bbox","bbox","borrow","borrow","borrow_mut","borrow_mut","class","classifier","clone","clone","clone_into","clone_into","dataset","detection","detector","eq","eq","feature","fmt","fmt","from","from","from_subset","from_subset","image","into","into","is_in_subset","is_in_subset","predictable","prelude","to_owned","to_owned","to_subset","to_subset","to_subset_unchecked","to_subset_unchecked","trainable","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","utils","value_from","value_from","value_into","value_into","vzip","vzip","BBox","approx_from","approx_into","borrow","borrow_mut","bottom","clone","clone_into","eq","fmt","from","from_subset","height","intersect_area","intersect_height","intersect_width","into","is_in_subset","left","merge","new","overlap","right","self_area","to_owned","to_subset","to_subset_unchecked","top","try_from","try_from","try_into","try_into","type_id","union_area","value_from","value_into","vzip","width","x","y","BayesClassifier","Classifier","SVMClassifier","approx_from","approx_from","approx_into","approx_into","borrow","borrow","borrow_mut","borrow_mut","default","default","deserialize","fit","fit","fmt","fmt","from","from","from_subset","from_subset","into","into","is_in_subset","is_in_subset","new","new","predict","predict","serialize","to_subset","to_subset","to_subset_unchecked","to_subset_unchecked","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","value_from","value_from","value_into","value_into","vzip","vzip","AnnotatedImageSet","DataSet","DummyDataSet","FolderDataSet","MemoryDataSet","add_annotated_image","add_annotated_image","annotated_images","annotated_images","annotated_images_len","annotated_images_len","approx_from","approx_from","approx_from","approx_into","approx_into","approx_into","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","default","default","from","from","from","from_subset","from_subset","from_subset","get_data","get_data","get_data","get_data","into","into","into","is_in_subset","is_in_subset","is_in_subset","len","len","len","len","load","load","load","load","load_label_names","new","new","new","to_subset","to_subset","to_subset","to_subset_unchecked","to_subset_unchecked","to_subset_unchecked","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","value_from","value_from","value_from","value_into","value_into","value_into","vzip","vzip","vzip","Detection","approx_from","approx_into","bbox","borrow","borrow_mut","class","clone","clone_into","confidence","eq","fmt","from","from_subset","into","is_in_subset","merge_overlapping_detections","new","to_owned","to_subset","to_subset_unchecked","try_from","try_from","try_into","try_into","type_id","value_from","value_into","vzip","BriefSVMDetector","Detector","HOGSVMDetector","approx_from","approx_from","approx_into","approx_into","borrow","borrow","borrow_mut","borrow_mut","default","default","detect","detect","detect","fit","fit","fmt","fmt","from","from","from_subset","from_subset","into","into","is_in_subset","is_in_subset","new","new","to_subset","to_subset","to_subset_unchecked","to_subset_unchecked","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","value_from","value_from","value_into","value_into","vzip","vzip","BriefFeature","DummyFeature","Feature","HOGFeature","approx_from","approx_from","approx_from","approx_into","approx_into","approx_into","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","default","default","extract","extract","extract","extract","fmt","fmt","from","from","from","from_subset","from_subset","from_subset","into","into","into","is_in_subset","is_in_subset","is_in_subset","new","new","new","new_with_options","new_with_threshold_and_length","to_subset","to_subset","to_subset","to_subset_unchecked","to_subset_unchecked","to_subset_unchecked","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","value_from","value_from","value_from","value_into","value_into","value_into","vzip","vzip","vzip","Predictable","predict","AnnotatedImage","Annotation","BBox","Class","Classifier","Detection","Detector","Feature","Predictable","Trainable","Trainable","fit","ImageWindow","SlidingWindow","WindowGenerator","approx_from","approx_from","approx_into","approx_into","borrow","borrow","borrow_mut","borrow_mut","clone","clone_into","crop_bbox","draw_bboxes","eq","extract_data","fmt","fmt","from","from","from_subset","from_subset","height","into","into","is_in_subset","is_in_subset","mul_acc","step_size","to_owned","to_subset","to_subset","to_subset_unchecked","to_subset_unchecked","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","value_from","value_from","value_into","value_into","view","vzip","vzip","width","windows","windows","x","y"],"q":["object_detector_rust","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","object_detector_rust::bbox","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","object_detector_rust::classifier","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","object_detector_rust::dataset","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","object_detector_rust::detection","","","","","","","","","","","","","","","","","","","","","","","","","","","","","object_detector_rust::detector","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","object_detector_rust::feature","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","object_detector_rust::predictable","","object_detector_rust::prelude","","","","","","","","","","object_detector_rust::trainable","","object_detector_rust::utils","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["Image annotated by list of Annotations","annotation is a object bounding box in image and class type","","object class type","Annotations for the image","","","","","This module contains the <code>BBox</code> struct for representing …","Bounding box of the object","","","","","Class of the object","The classifier module provides traits and implementations …","","","","","This module contains the <code>DataSet</code> trait for representing …","Struct for representing a detected object","A trait for object detectors","","","This module contains traits and structs for feature …","","","Returns the argument unchanged.","Returns the argument unchanged.","","","Image","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","Trait for objects that can make predictions","the object-detector-rust prelude","","","","","","","Trait for objects that can be trained","","","","","","","","","","","Utility functions for working with images","","","","","","","Struct for representing a bounding box","","","","","Returns the bottom coordinate of the bounding box","","","","","Returns the argument unchanged.","","Height of the bounding box","Calculates the area of the intersection between two …","Calculates the height of the intersection between two …","Calculates the width of the intersection between two …","Calls <code>U::from(self)</code>.","","Returns the left coordinate of the bounding box","Merges two bounding boxes into a single bounding box that …","Creates a new bounding box with the specified coordinates …","Calculates the overlap between two bounding boxes as the …","Returns the right coordinate of the bounding box","Calculates the area of the bounding box","","","","Returns the top coordinate of the bounding box","","","","","","Calculates the area of the union between two bounding boxes","","","","Width of the bounding box","X coordinate of the top-left corner of the bounding box","Y coordinate of the top-left corner of the bounding box","The <code>BayesClassifier</code> struct provides a Gaussian Naive Bayes …","The Classifier trait defines the behavior of a machine …","The SVMClassifier struct represents an SVM classifier with …","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","Creates a new <code>BayesClassifier</code> instance with default …","Creates a new <code>SVMClassifier</code>.","","","","","","","","","","","","","","","","","","","","","","","","trait of a set of annotated images","Trait representing a dataset of images and labels for …","Dummy dataset that returns a fixed set of images and labels","Struct for representing a dataset loaded from a folder","Struct for representing a dataset in memory","adds an annotated image","Adds an annotated image to the dataset","returns iterator over annotated images","returns iterator over images","returns length of annotated images","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","","Returns the images and labels for training","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","Returns the number of images in the dataset","","","","Loads the dataset","","","","Loads a list of label names from the specified file path.","Creates a new dataset from the specified folder","Creates a new, empty dataset","Creates a new <code>DummyDataSet</code>","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Struct for representing a detected object","","","Bounding box of the detected object","","","Class of the detected object","","","Confidence of the detection","","","Returns the argument unchanged.","","Calls <code>U::from(self)</code>.","","Merges overlapping detections with the same class","Creates a new <code>Detection</code> with the given bounding box, …","","","","","","","","","","","","Struct representing an object detector using HOG features …","Trait for object detection","Struct representing an object detector using HOG features …","","","","","","","","","","","Detects objects in an image","","","Trains the HOGSVMDetector on the given training data and …","Trains the HOGSVMDetector on the given training data and …","","","Returns the argument unchanged.","Returns the argument unchanged.","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","Creates a new <code>HOGSVMDetector</code> with default parameters","Creates a new <code>HOGSVMDetector</code> with default parameters","","","","","","","","","","","","","","","","","","","","","Struct for extracting BRIEF (Binary Robust Independent …","Dummy feature descriptor that always returns the same value","Trait for feature descriptors that can be extracted from …","Struct for extracting HOG features from images.","","","","","","","","","","","","","Creates a new HOG feature extractor with default options","","Extracts the feature descriptor from the given image","","","Extracts the feature descriptor from the given image","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","Creates a new dummy feature descriptor with the given value","Creates a new HOG feature extractor","Creates a new <code>BriefFeature</code> instance with default …","Creates a new <code>HogFeature</code> with the given <code>HogOptions</code>.","Creates a new <code>BriefFeature</code> with the given threshold and …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Trait for objects that can make predictions","Makes predictions on the provided data using the trained …","","","","","","","","","","","Trait for objects that can be trained","Trains the <code>SVMClassifier</code> on the provided training data.","Struct representing a window over an image with a position","Struct for generating sliding windows over an image","Trait for generating windows over an image","","","","","","","","","","","Crops an image to the dimensions specified in the bounding …","Draws bounding boxes on an image.","","Transforms a given vector of extracted features and a …","","","Returns the argument unchanged.","Returns the argument unchanged.","","","Height of the window","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","Step size for moving the window","","","","","","","","","","","","","","","","","","","","View of the image within the window","","","Width of the window","Generates a series of windows over the given image","","X position of the window","Y position of the window"],"i":[0,0,0,0,3,2,3,2,3,0,2,2,3,2,3,2,0,2,3,2,3,0,0,0,2,3,0,2,3,2,3,2,3,3,2,3,2,3,0,0,2,3,2,3,2,3,0,2,2,3,3,2,2,3,3,2,3,0,2,3,2,3,2,3,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,13,14,13,14,13,14,13,14,13,14,14,13,14,13,14,13,14,13,14,13,14,13,14,13,14,13,14,14,13,14,13,14,13,13,14,14,13,13,14,14,13,14,13,14,13,14,13,14,0,0,0,0,0,44,20,44,20,44,20,24,20,23,24,20,23,24,20,23,24,20,23,20,23,24,20,23,24,20,23,45,24,20,23,24,20,23,24,20,23,45,24,20,23,45,24,20,23,24,24,20,23,24,20,23,24,20,23,24,24,20,20,23,23,24,24,20,20,23,23,24,20,23,24,20,23,24,20,23,24,20,23,0,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,0,28,28,28,28,28,28,28,28,28,28,28,28,0,0,0,31,32,31,32,31,32,31,32,31,32,46,31,32,31,32,31,32,31,32,31,32,31,32,31,32,31,32,31,32,31,32,31,31,32,32,31,31,32,32,31,32,31,32,31,32,31,32,0,0,0,0,37,35,36,37,35,36,37,35,36,37,35,36,35,36,47,37,35,36,35,36,37,35,36,37,35,36,37,35,36,37,35,36,37,35,36,35,36,37,35,36,37,35,36,37,37,35,35,36,36,37,37,35,35,36,36,37,35,36,37,35,36,37,35,36,37,35,36,0,48,0,0,0,0,0,0,0,0,0,0,0,49,0,0,0,30,41,30,41,30,41,30,41,41,41,0,0,41,0,30,41,30,41,30,41,30,30,41,30,41,41,30,41,30,41,30,41,30,30,41,41,30,30,41,41,30,41,30,41,30,41,41,30,41,30,50,30,41,41],"f":[0,0,0,0,0,[[],1],[[],1],[[],1],[[],1],0,0,[[]],[[]],[[]],[[]],0,0,[2,2],[3,3],[[]],[[]],0,0,0,[[2,2],4],[[3,3],4],0,[[2,5],6],[[3,5],6],[[]],[[]],[[]],[[]],0,[[]],[[]],[[],4],[[],4],0,0,[[]],[[]],[[],7],[[],7],[[]],[[]],0,[[],1],[[],1],[[],1],[[],1],[[],1],[[],1],[[],1],[[],1],[[],8],[[],8],0,[[],1],[[],1],[[],1],[[],1],[[]],[[]],0,[[],1],[[],1],[[]],[[]],[9,10],[9,9],[[]],[[9,9],4],[[9,5],6],[[]],[[]],0,[[9,9],11],[[9,9],11],[[9,9],11],[[]],[[],4],[9,10],[[9,9],9],[[10,10,11,11],9],[[9,9],12],[9,10],[9,11],[[]],[[],7],[[]],[9,10],[[],1],[[],1],[[],1],[[],1],[[],8],[[9,9],11],[[],1],[[],1],[[]],0,0,0,0,0,0,[[],1],[[],1],[[],1],[[],1],[[]],[[]],[[]],[[]],[[],13],[[],14],[[],[[1,[14]]]],[[13,15,16],[[1,[17]]]],[[14,15,16],[[1,[17]]]],[[13,5],6],[[14,5],6],[[]],[[]],[[]],[[]],[[]],[[]],[[],4],[[],4],[[],13],[[],14],[[13,15],[[1,[[19,[18]],17]]]],[[14,15],[[1,[[19,[4]],17]]]],[14,1],[[],7],[[],7],[[]],[[]],[[],1],[[],1],[[],1],[[],1],[[],1],[[],1],[[],1],[[],1],[[],8],[[],8],[[],1],[[],1],[[],1],[[],1],[[]],[[]],0,0,0,0,0,[3],[[20,3]],[[],[[22,[21]]]],[20,[[22,[21]]]],[[],18],[20,18],[[],1],[[],1],[[],1],[[],1],[[],1],[[],1],[[]],[[]],[[]],[[]],[[]],[[]],[[],20],[[],23],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[24],[20],[23],[[]],[[]],[[]],[[],4],[[],4],[[],4],[[],18],[24,18],[20,18],[23,18],[[],[[1,[[22,[25]]]]]],[24,[[1,[[22,[25]]]]]],[20,[[1,[[22,[25]]]]]],[23,[[1,[[22,[25]]]]]],[26,[[27,[17]]]],[[26,11,11,[27,[17]]],24],[[],20],[[],23],[[],7],[[],7],[[],7],[[]],[[]],[[]],[[],1],[[],1],[[],1],[[],1],[[],1],[[],1],[[],1],[[],1],[[],1],[[],1],[[],1],[[],1],[[],8],[[],8],[[],8],[[],1],[[],1],[[],1],[[],1],[[],1],[[],1],[[]],[[]],[[]],0,[[],1],[[],1],0,[[]],[[]],0,[28,28],[[]],0,[[28,28],4],[[28,5],6],[[]],[[]],[[]],[[],4],[27,[[27,[28]]]],[[9,29,12],28],[[]],[[],7],[[]],[[],1],[[],1],[[],1],[[],1],[[],8],[[],1],[[],1],[[]],0,0,0,[[],1],[[],1],[[],1],[[],1],[[]],[[]],[[]],[[]],[[],[[31,[30]]]],[[],[[32,[30]]]],[33,[[27,[28]]]],[[31,33],[[27,[28]]]],[[32,33],[[27,[28]]]],[[31,15,16],[[1,[17]]]],[[32,15,16],[[1,[17]]]],[[[31,[34]],5],6],[[[32,[34]],5],6],[[]],[[]],[[]],[[]],[[]],[[]],[[],4],[[],4],[[],31],[[],32],[[],7],[[],7],[[]],[[]],[[],1],[[],1],[[],1],[[],1],[[],1],[[],1],[[],1],[[],1],[[],8],[[],8],[[],1],[[],1],[[],1],[[],1],[[]],[[]],0,0,0,0,[[],1],[[],1],[[],1],[[],1],[[],1],[[],1],[[]],[[]],[[]],[[]],[[]],[[]],[[],35],[[],36],[33,[[1,[[27,[12]],17]]]],[[37,33],[[1,[[27,[12]],17]]]],[[35,33],[[1,[[27,[12]],17]]]],[[36,33],[[1,[[27,[12]],17]]]],[[35,5],6],[[36,5],6],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],4],[[],4],[[],4],[12,37],[[],35],[[],36],[38,35],[[39,11],36],[[],7],[[],7],[[],7],[[]],[[]],[[]],[[],1],[[],1],[[],1],[[],1],[[],1],[[],1],[[],1],[[],1],[[],1],[[],1],[[],1],[[],1],[[],8],[[],8],[[],8],[[],1],[[],1],[[],1],[[],1],[[],1],[[],1],[[]],[[]],[[]],0,[15,[[1,[19,17]]]],0,0,0,0,0,0,0,0,0,0,0,[[15,16],[[1,[17]]]],0,0,0,[[],1],[[],1],[[],1],[[],1],[[]],[[]],[[]],[[]],[[[41,[40]]],[[41,[40]]]],[[]],[[33,9],33],[33],[[[41,[42]],41],4],[[[27,[27]],27]],[[30,5],6],[[[41,[34]],5],6],[[]],[[]],[[]],[[]],0,[[]],[[]],[[],4],[[],4],[[]],0,[[]],[[],7],[[],7],[[]],[[]],[[],1],[[],1],[[],1],[[],1],[[],1],[[],1],[[],1],[[],1],[[],8],[[],8],[[],1],[[],1],[[],1],[[],1],0,[[]],[[]],0,[[],[[27,[[41,[43]]]]]],[[30,33],[[27,[[41,[[43,[33]]]]]]]],0,0],"p":[[4,"Result"],[3,"Annotation"],[3,"AnnotatedImage"],[15,"bool"],[3,"Formatter"],[6,"Result"],[4,"Option"],[3,"TypeId"],[3,"BBox"],[15,"i32"],[15,"u32"],[15,"f32"],[3,"BayesClassifier"],[3,"SVMClassifier"],[6,"ArrayView2"],[6,"ArrayView1"],[3,"String"],[15,"usize"],[6,"Array1"],[3,"MemoryDataSet"],[8,"Iterator"],[3,"Box"],[3,"DummyDataSet"],[3,"FolderDataSet"],[8,"Error"],[15,"str"],[3,"Vec"],[3,"Detection"],[6,"Class"],[3,"SlidingWindow"],[3,"BriefSVMDetector"],[3,"HOGSVMDetector"],[4,"DynamicImage"],[8,"Debug"],[3,"HOGFeature"],[3,"BriefFeature"],[3,"DummyFeature"],[3,"HogOptions"],[15,"u8"],[8,"Clone"],[3,"ImageWindow"],[8,"PartialEq"],[3,"SubImage"],[8,"AnnotatedImageSet"],[8,"DataSet"],[8,"Detector"],[8,"Feature"],[8,"Predictable"],[8,"Trainable"],[8,"WindowGenerator"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
