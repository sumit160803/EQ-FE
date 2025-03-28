// const modelData = {
//     random_forest: {
//       name: "Random Forest",
//       images: [
//         "/images/RF_1.png"
//       ],
//       description: "Random Forest is an ensemble learning method that builds multiple decision trees and merges their predictions for better accuracy and stability."
//     },
//     knn: {
//       name: "K-Nearest Neighbors (KNN)",
//       images: [
//         "/images/KNN_1.png",
//         "/images/KNN_2.png",
//         "/images/KNN_3.png",
//       ],
//       description: "KNN is a simple algorithm that classifies a data point based on the majority class of its nearest neighbors."
//     },
//     linear: {
//       name: "Linear Regression",
//       images: [
//         "/images/LL_1.png"
//       ],
//       description: "Linear Regression is used for predicting continuous values by finding the best-fitting linear equation for the given data."
//     },
//     naive_bayes: {
//       name: "Naive Bayes",
//       images: [
//         "/images/NB_1.png",
//         "/images/NB_2.png",
//         "/images/NB_3.png",
//         "/images/NB_4.png",
//       ],
//       description: "Naive Bayes is a probabilistic classifier based on Bayes' theorem, often used for text classification."
//     },
//     svm: {
//       name: "Support Vector Machine (SVM)",
//       images: [
//         "/images/SVM_1.png"
//       ],
//       description: "SVM is a powerful classification algorithm that finds the optimal boundary to separate data points into different categories."
//     }
//   };
  
//   export default modelData;
  ////////////////////////////////////////////////////////////////////////////////////////
  const modelData = {
    random_forest: {
      name: "Random Forest",
      images: ["/images/RF_1.png"],
      description:
        "Random Forest is an ensemble learning method that builds multiple decision trees and merges their predictions for better accuracy and stability.",
      usage:
        "In this project, Random Forest is used to predict earthquake magnitudes by aggregating predictions from multiple decision trees, reducing overfitting and improving accuracy.",
      pros: [
        "Handles large datasets efficiently",
        "Resistant to overfitting",
        "Can handle both classification and regression problems",
      ],
      cons: [
        "Requires more computational power than a single decision tree",
        "Less interpretable compared to simpler models",
      ],
      best_use_case: "Best used when accuracy is more important than interpretability, especially for complex datasets with non-linear relationships.",
    },
  
    knn: {
      name: "K-Nearest Neighbors (KNN)",
      images: ["/images/KNN_1.png", "/images/KNN_2.png", "/images/KNN_3.png"],
      description:
        "KNN is a simple algorithm that classifies a data point based on the majority class of its nearest neighbors.",
      usage:
        "In this project, KNN predicts earthquake magnitudes by comparing new earthquake data to similar past earthquakes and averaging their magnitudes.",
      pros: [
        "Simple to understand and implement",
        "Works well with small datasets",
        "No training phase, making it fast for small-scale problems",
      ],
      cons: [
        "Computationally expensive for large datasets",
        "Sensitive to irrelevant or redundant features",
      ],
      best_use_case: "Best for small or medium-sized datasets where interpretability is important.",
    },
  
    linear: {
      name: "Linear Regression",
      images: ["/images/LL_1.png"],
      description:
        "Linear Regression is used for predicting continuous values by finding the best-fitting linear equation for the given data.",
      usage:
        "In this project, Linear Regression provides a simple approximation for earthquake magnitude predictions, assuming a linear relationship between features and output.",
      pros: [
        "Easy to implement and interpret",
        "Computationally efficient",
        "Works well when relationships between variables are linear",
      ],
      cons: [
        "Struggles with complex, non-linear data",
        "Sensitive to outliers",
      ],
      best_use_case: "Best when the relationship between input features and the target variable is approximately linear.",
    },
  
    naive_bayes: {
      name: "Naive Bayes",
      images: ["/images/NB_1.png", "/images/NB_2.png", "/images/NB_3.png", "/images/NB_4.png"],
      description:
        "Naive Bayes is a probabilistic classifier based on Bayes' theorem, often used for text classification.",
      usage:
        "In this project, Naive Bayes estimates the probability of an earthquake’s magnitude based on historical frequency distributions.",
      pros: [
        "Fast and efficient for large datasets",
        "Performs well even with small amounts of training data",
        "Works well with categorical data",
      ],
      cons: [
        "Assumes feature independence, which may not be realistic",
        "Struggles with continuous variables without preprocessing",
      ],
      best_use_case: "Best for probability-based predictions where feature independence is a reasonable assumption.",
    },
  
    svm: {
      name: "Support Vector Machine (SVM)",
      images: ["/images/SVM_1.png"],
      description:
        "SVM is a powerful classification algorithm that finds the optimal boundary to separate data points into different categories.",
      usage:
        "In this project, SVM is used to classify earthquake magnitudes into different categories by finding the best separating hyperplane in feature space.",
      pros: [
        "Works well with high-dimensional data",
        "Effective when the dataset has a clear margin of separation",
        "Can be used for both classification and regression",
      ],
      cons: [
        "Computationally expensive for large datasets",
        "Hard to interpret compared to simpler models",
      ],
      best_use_case: "Best for high-dimensional datasets with well-defined decision boundaries.",
    },
  };
  
  export default modelData;
  