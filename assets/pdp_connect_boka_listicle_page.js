window.__WWAI__ = window.__WWAI__ || {};
    
// Environment + Mode Config
// Use metafield-based subscription in sandbox/local
window.__WWAI__.useMockSubscription = true;

// Options: "local" | "sandbox" | "prod"
window.__WWAI__.deployMode = "local";

// Enables dev/debugger mode, values are dev, prod
window.__WWAI__.MODE = "dev";

// Controls Liquid-product rendering
window.__WWAI__.RENDER_WITH_LIQUID = true;

// Which connector to use for hydration
window.__WWAI__.CONNECTOR_TYPE = "shopify";

// Enable logging for grid height debugging
window.__WWAI__.heightEqualizeLogging = true;

// Currency Config
// Active currency from Shopify
window.__WWAI__.CURRENCY = Shopify.currency.active;

// Currency conversion factor
window.__WWAI__.CURRENCY_FACTOR = 0.01;

// Product mapping object
window.__WWAI__.JS_PRODUCT_MAPPING_OBJECT = {};

// Product group config
window.__WWAI__.WWAI_PRODUCT_GROUP_CONFIG = {
  "boka_static_listicle_pdp_C9pxRm": {
    "defaults": {
      "pricingConfig": {
        "discountPercent": 0,
        "subscriptionDiscountPercent": 0,
        "defaultSubscriptionOption": null,
        "useVariantCompareAtPriceForSubscription": false,
        "discountCodeToApply": [],
        "roundDiscount": true,
        "addOffSuffixToDiscount": false
      },
      "uxConfig": {
        "variantOptionRemovePrefix": "Every",
        "defaultPurchaseType": "subscription",
        "variantUXConfig": {
          "hideSingleLengthVariants": false,
          "onlyShowVariantsWithLabelContains": null,
          "refreshUxOnVariantChange": true
        },
        "preAddToCartFlowConfig": {
          "journeyType": "overlay",
          "overlayContents": [],
          "postSelectionAction": "na",
          "postSelectionActionParams": {
            "custom_url": null,
            "redirect_variant_options": null
          }
        }
      },
      "flowConfig": {
        "destination": "side-cart",
        "loader": "add-to-cart-submit-button",
        "showSuccessNotification": false,
        "showErrorNotification": false,
        "sideCartLabel": "",
        "successNotificationMessage": "✅ Added to cart!",
        "errorNotificationMessage": "Oops, couldn't add item.",
        "notificationOptions": {
          "backgroundColor": "#E8DDFA",
          "textColor": "#000000",
          "borderColor": "transparent",
          "fontFamily": "sans-serif"
        }
      }
    },
    "ela-mint-toothpaste": {
      "pricingConfig": null,
      "uxConfig": null,
      "flowConfig": null,
      "variantDispatchConfig": {
        "defaultProduct": "ela-mint-toothpaste",
        "defaultVariantOption1": "1 Pack",
        "defaultVariantOption2": null,
        "defaultVariantOption3": null,
        "allProducts": "ela-mint-toothpaste",
        "allOptions": {
          "option1": "1 Pack | 2 Pack | 3 Pack",
          "option2": "",
          "option3": ""
        }
      }
    }
  },
  "boka_static_listicle_products_fnHR7Y": {
    "defaults": {
      "pricingConfig": {
        "discountPercent": 0,
        "subscriptionDiscountPercent": 0,
        "defaultSubscriptionOption": null,
        "useVariantCompareAtPriceForSubscription": true,
        "discountCodeToApply": [],
        "roundDiscount": true,
        "addOffSuffixToDiscount": false
      },
      "uxConfig": {
        "variantOptionRemovePrefix": "Every",
        "defaultPurchaseType": "subscription",
        "variantUXConfig": {
          "hideSingleLengthVariants": false,
          "onlyShowVariantsWithLabelContains": null,
          "refreshUxOnVariantChange": true
        },
        "preAddToCartFlowConfig": {
          "journeyType": "overlay",
          "overlayContents": [],
          "postSelectionAction": "na",
          "postSelectionActionParams": {
            "custom_url": null,
            "redirect_variant_options": null
          }
        }
      },
      "flowConfig": {
        "destination": "side-cart",
        "loader": "add-to-cart-submit-button",
        "showSuccessNotification": false,
        "showErrorNotification": false,
        "sideCartLabel": "",
        "successNotificationMessage": "✅ Added to cart!",
        "errorNotificationMessage": "Oops, couldn't add item.",
        "notificationOptions": {
          "backgroundColor": "#E8DDFA",
          "textColor": "#000000",
          "borderColor": "transparent",
          "fontFamily": "sans-serif"
        }
      }
    },
    "refresh-mint-whitening-toothpaste": {
      "pricingConfig": null,
      "uxConfig": null,
      "flowConfig": null,
      "variantDispatchConfig": {
        "defaultProduct": "refresh-mint-whitening-toothpaste",
        "defaultVariantOption1": "1 Pack",
        "defaultVariantOption2": null,
        "defaultVariantOption3": null,
        "allProducts": "refresh-mint-whitening-toothpaste",
        "allOptions": {
          "option1": "1 Pack | 2 Pack | 3 Pack",
          "option2": "",
          "option3": ""
        }
      }
    },
    "brightboost-whitening-powder": {
      "pricingConfig": null,
      "uxConfig": null,
      "flowConfig": null,
      "variantDispatchConfig": {
        "defaultProduct": "brightboost-whitening-powder",
        "defaultVariantOption1": "Default Title",
        "defaultVariantOption2": null,
        "defaultVariantOption3": null,
        "allProducts": "brightboost-whitening-powder",
        "allOptions": {
          "option1": "Default Title",
          "option2": "",
          "option3": ""
        }
      }
    },
    "nano-n-ha-toothpaste-whitening-3-pack": {
      "pricingConfig": null,
      "uxConfig": null,
      "flowConfig": null,
      "variantDispatchConfig": {
        "defaultProduct": "nano-n-ha-toothpaste-whitening-3-pack",
        "defaultVariantOption1": "Ela Mint",
        "defaultVariantOption2": "Ela Mint",
        "defaultVariantOption3": null,
        "allProducts": "nano-n-ha-toothpaste-whitening-3-pack",
        "allOptions": {
          "option1": "Ela Mint | Lemon Lavender | Coco Ginger | Cinna Mint | Watermelon Mint | Orange Cream | Refresh Mint Whitening | Cucumber Mint",
          "option2": "Ela Mint | Lemon Lavender | Coco Ginger | Cinna Mint | Watermelon Mint | Orange Cream | Refresh Mint Whitening | Cucumber Mint",
          "option3": ""
        }
      }
    },
    "nano-n-ha-toothpaste-family-3-pack": {
      "pricingConfig": null,
      "uxConfig": null,
      "flowConfig": null,
      "variantDispatchConfig": {
        "defaultProduct": "nano-n-ha-toothpaste-family-3-pack",
        "defaultVariantOption1": "Orange Cream",
        "defaultVariantOption2": "Strawberry Mango",
        "defaultVariantOption3": "Watermelon Mint",
        "allProducts": "nano-n-ha-toothpaste-family-3-pack",
        "allOptions": {
          "option1": "Orange Cream | Watermelon Mint | Strawberry Mango",
          "option2": "Strawberry Mango | Orange Cream | Watermelon Mint | Ela Mint | Lemon Lavender",
          "option3": "Watermelon Mint | Orange Cream | Strawberry Mango | Ela Mint | Lemon Lavender"
        }
      }
    }
  }
};

// Variant overrides
window.__WWAI__.WWAI_PRODUCT_VARIANT_OVERRIDES = {
  "boka_static_listicle_pdp_C9pxRm": {
    "ela-mint-toothpaste": {
      "ela-mint-toothpaste": {
        "1 Pack": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "2 Pack": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "3 Pack": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        }
      }
    }
  },
  "boka_static_listicle_products_fnHR7Y": {
    "refresh-mint-whitening-toothpaste": {
      "refresh-mint-whitening-toothpaste": {
        "1 Pack": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "2 Pack": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "3 Pack": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        }
      }
    },
    "brightboost-whitening-powder": {
      "brightboost-whitening-powder": {
        "Default Title": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        }
      }
    },
    "nano-n-ha-toothpaste-whitening-3-pack": {
      "nano-n-ha-toothpaste-whitening-3-pack": {
        "Ela Mint | Ela Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Ela Mint | Lemon Lavender": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Ela Mint | Coco Ginger": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Ela Mint | Cinna Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Ela Mint | Watermelon Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Ela Mint | Orange Cream": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Ela Mint | Refresh Mint Whitening": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Ela Mint | Cucumber Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Lemon Lavender | Ela Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Lemon Lavender | Lemon Lavender": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Lemon Lavender | Coco Ginger": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Lemon Lavender | Cinna Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Lemon Lavender | Watermelon Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Lemon Lavender | Orange Cream": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Lemon Lavender | Refresh Mint Whitening": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Lemon Lavender | Cucumber Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Coco Ginger | Ela Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Coco Ginger | Lemon Lavender": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Coco Ginger | Coco Ginger": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Coco Ginger | Cinna Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Coco Ginger | Watermelon Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Coco Ginger | Orange Cream": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Coco Ginger | Refresh Mint Whitening": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Coco Ginger | Cucumber Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Cinna Mint | Ela Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Cinna Mint | Lemon Lavender": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Cinna Mint | Coco Ginger": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Cinna Mint | Cinna Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Cinna Mint | Watermelon Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Cinna Mint | Orange Cream": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Cinna Mint | Refresh Mint Whitening": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Cinna Mint | Cucumber Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Ela Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Lemon Lavender": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Coco Ginger": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Cinna Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Watermelon Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Orange Cream": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Refresh Mint Whitening": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Cucumber Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Ela Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Lemon Lavender": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Coco Ginger": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Cinna Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Watermelon Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Orange Cream": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Refresh Mint Whitening": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Cucumber Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Refresh Mint Whitening | Ela Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Refresh Mint Whitening | Lemon Lavender": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Refresh Mint Whitening | Coco Ginger": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Refresh Mint Whitening | Cinna Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Refresh Mint Whitening | Watermelon Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Refresh Mint Whitening | Orange Cream": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Refresh Mint Whitening | Refresh Mint Whitening": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Refresh Mint Whitening | Cucumber Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Cucumber Mint | Ela Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Cucumber Mint | Lemon Lavender": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Cucumber Mint | Coco Ginger": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Cucumber Mint | Cinna Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Cucumber Mint | Watermelon Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Cucumber Mint | Orange Cream": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Cucumber Mint | Refresh Mint Whitening": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Cucumber Mint | Cucumber Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        }
      }
    },
    "nano-n-ha-toothpaste-family-3-pack": {
      "nano-n-ha-toothpaste-family-3-pack": {
        "Orange Cream | Strawberry Mango | Watermelon Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Strawberry Mango | Orange Cream": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Strawberry Mango | Strawberry Mango": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Strawberry Mango | Ela Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Strawberry Mango | Lemon Lavender": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Orange Cream | Watermelon Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Orange Cream | Orange Cream": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Orange Cream | Strawberry Mango": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Orange Cream | Ela Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Orange Cream | Lemon Lavender": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Watermelon Mint | Watermelon Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Watermelon Mint | Orange Cream": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Watermelon Mint | Strawberry Mango": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Watermelon Mint | Ela Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Watermelon Mint | Lemon Lavender": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Ela Mint | Watermelon Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Ela Mint | Orange Cream": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Ela Mint | Strawberry Mango": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Ela Mint | Ela Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Ela Mint | Lemon Lavender": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Lemon Lavender | Watermelon Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Lemon Lavender | Orange Cream": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Lemon Lavender | Strawberry Mango": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Lemon Lavender | Ela Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Orange Cream | Lemon Lavender | Lemon Lavender": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Strawberry Mango | Watermelon Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Strawberry Mango | Orange Cream": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Strawberry Mango | Strawberry Mango": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Strawberry Mango | Ela Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Strawberry Mango | Lemon Lavender": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Orange Cream | Watermelon Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Orange Cream | Orange Cream": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Orange Cream | Strawberry Mango": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Orange Cream | Ela Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Orange Cream | Lemon Lavender": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Watermelon Mint | Watermelon Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Watermelon Mint | Orange Cream": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Watermelon Mint | Strawberry Mango": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Watermelon Mint | Ela Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Watermelon Mint | Lemon Lavender": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Ela Mint | Watermelon Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Ela Mint | Orange Cream": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Ela Mint | Strawberry Mango": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Ela Mint | Ela Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Ela Mint | Lemon Lavender": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Lemon Lavender | Watermelon Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Lemon Lavender | Orange Cream": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Lemon Lavender | Strawberry Mango": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Lemon Lavender | Ela Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Watermelon Mint | Lemon Lavender | Lemon Lavender": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Strawberry Mango | Strawberry Mango | Watermelon Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Strawberry Mango | Strawberry Mango | Orange Cream": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Strawberry Mango | Strawberry Mango | Strawberry Mango": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Strawberry Mango | Strawberry Mango | Ela Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Strawberry Mango | Strawberry Mango | Lemon Lavender": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Strawberry Mango | Orange Cream | Watermelon Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Strawberry Mango | Orange Cream | Orange Cream": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Strawberry Mango | Orange Cream | Strawberry Mango": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Strawberry Mango | Orange Cream | Ela Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Strawberry Mango | Orange Cream | Lemon Lavender": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Strawberry Mango | Watermelon Mint | Watermelon Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Strawberry Mango | Watermelon Mint | Orange Cream": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Strawberry Mango | Watermelon Mint | Strawberry Mango": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Strawberry Mango | Watermelon Mint | Ela Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Strawberry Mango | Watermelon Mint | Lemon Lavender": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Strawberry Mango | Ela Mint | Watermelon Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Strawberry Mango | Ela Mint | Orange Cream": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Strawberry Mango | Ela Mint | Strawberry Mango": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Strawberry Mango | Ela Mint | Ela Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Strawberry Mango | Ela Mint | Lemon Lavender": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Strawberry Mango | Lemon Lavender | Watermelon Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Strawberry Mango | Lemon Lavender | Orange Cream": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Strawberry Mango | Lemon Lavender | Strawberry Mango": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Strawberry Mango | Lemon Lavender | Ela Mint": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        },
        "Strawberry Mango | Lemon Lavender | Lemon Lavender": {
          "customMediaLabel": null,
          "redirectToMediaIndex": null,
          "customLabelText": {}
        }
      }
    }
  }
};

// Labeled images
window.__WWAI__.WWAI_LABELED_IMAGES = {};

// Action buttons
window.__WWAI__.WWAI_ACTION_BUTTONS = {
  "//div[@id=\"shopify-section-template--24857050120509__boka_listicle_hero_banner_ccrmq6\"]//div[1]/div[1]/div[1]/div[1]/a[1]": {
    "actionType": "scroll-to",
    "value": "shopify-section-template--24857050120509__boka_static_listicle_pdp_C9pxRm"
  },
  "//div[@id=\"shopify-section-template--24857050120509__boka_listicle_hero_banner_ccrmq6\"]//div[1]/div[1]/div[1]/div[1]/div[3]/a[1]": {
    "actionType": "custom-url",
    "value": "https://www.amazon.com/All-toothpaste-whitening-fluoride-free/dp/B083JHCCV2/ref=sr_1_1?th=1"
  },
  "//div[@id=\"shopify-section-template--24857050120509__boka_static_listicle_pdp_C9pxRm\"]//div[1]/div[1]/custom-product[1]/product-info[1]/a[1]": {
    "actionType": "custom-url",
    "value": "https://www.amazon.com/All-toothpaste-whitening-fluoride-free/dp/B083JHCCV2/ref=sr_1_1?th=1"
  },
  "//div[@id=\"shopify-section-template--24857050120509__boka_static_listicle_pdp_C9pxRm\"]//div[1]/div[1]/custom-product[1]/product-info[1]/div[5]/div[1]/div[1]/p[1]/a[1]": {
    "actionType": "no-action",
    "value": null
  },
  "//div[@id=\"shopify-section-template--24857050120509__boka_static_listicle_pdp_C9pxRm\"]//section[1]/div[1]/div[1]/div[1]/div[2]/a[1]": {
    "actionType": "scroll-to",
    "value": "shopify-section-template--24857050120509__boka_static_listicle_pdp_C9pxRm"
  },
  "//div[@id=\"shopify-section-template--24857050120509__boka_static_listicle_pdp_C9pxRm\"]//section[1]/div[1]/div[1]/div[1]/div[2]/div[1]/a[1]": {
    "actionType": "custom-url",
    "value": "https://www.amazon.com/All-toothpaste-whitening-fluoride-free/dp/B083JHCCV2/ref=sr_1_1?th=1"
  }
};