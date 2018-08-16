import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../../HeaderLoggedOut';
import Footer from '../../Footer';
import Button from '../../Button';
import Tile from '../../Tile';
import TileImage from '../../TileImage';
import TileOverlay from '../../TileOverlay';
import TileCaption from '../../TileCaption';
import AnimationHandler from '../../AnimationHandler';
import HoverHandler from '../../HoverHandler';
import ResponsiveHandler from '../../ResponsiveHandler';
import Facebook from '../../../assets/icons/facebook.svg';
import Twitter from '../../../assets/icons/twitter.svg';
import Instagram from '../../../assets/icons/instagram.svg';
import ChevronLeft from '../../../assets/icons/chevron-left.svg';
import ChevronRight from '../../../assets/icons/chevron-right.svg';
storiesOf('playground|Pages', module).add('Home', function () {
  return React.createElement("div", null, React.createElement(Header, null), React.createElement("div", {
    className: "mc-background--dark",
    style: {
      padding: '160px 0'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-xl-5 col-lg-6 col-md-8"
  }, React.createElement("h2", {
    className: "mc-text-d1 mc-text--uppercase mc-text-center mc-text-md-left"
  }, "Alice Waters"), React.createElement("h3", {
    className: "mc-text-h3 mc-text--muted mc-text-center mc-text-md-left"
  }, "Teaches the art of home cooking"), React.createElement("br", null), React.createElement("p", {
    className: "mc-text-intro mc-text-center mc-text-md-left"
  }, "Online classes taught by the world's greatest minds.", React.createElement("br", null), "Learn from Alice Waters and all 35+ other instructors."), React.createElement("br", null), React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-md-6"
  }, React.createElement(Button, {
    primary: true,
    fullWidth: true
  }, "All Access Pass")), React.createElement("div", {
    className: "col-md-6"
  }, React.createElement(Button, {
    secondary: true,
    fullWidth: true
  }, "Learn More"))))))), React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "mc-section"
  }, React.createElement("div", {
    className: "mc-section__header"
  }, React.createElement("h2", {
    className: "mc-text-h3 mc-text-center"
  }, "MasterClass In The News")), React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-md-2 mc-text--muted mc-text-center"
  }, React.createElement("img", {
    height: "20",
    src: "https://do6eyjibs3jse.cloudfront.net/assets/experiments/mc_press/today-4d4e4dfc0db7fa08e4e18e4b0ae9f8598e674c0de4f3349d9b74f02138604276.svg"
  })), React.createElement("div", {
    className: "col-md-2 mc-text--muted mc-text-center"
  }, React.createElement("img", {
    height: "20",
    src: "https://do6eyjibs3jse.cloudfront.net/assets/experiments/mc_press/nbc-e43bb6ae09ed3b16c8e6509a76ed454e7cb9289c3723288a84d4b31e34785222.svg"
  })), React.createElement("div", {
    className: "col-md-2 mc-text--muted mc-text-center"
  }, React.createElement("img", {
    height: "20",
    src: "https://do6eyjibs3jse.cloudfront.net/assets/experiments/mc_press/new_york_times-8e2107a8c7cb51f1ea6dff352bbe21ad7c414e2348b2fa88b0c506b5ddc80ed9.svg"
  })), React.createElement("div", {
    className: "col-md-2 mc-text--muted mc-text-center"
  }, React.createElement("img", {
    height: "20",
    src: "https://do6eyjibs3jse.cloudfront.net/assets/experiments/mc_press/billboard-afafead87dedb11a8a2c8684e2a9714dc4add1f508b91ea5ad06789197e6e8ee.svg"
  })), React.createElement("div", {
    className: "col-md-2 mc-text--muted mc-text-center"
  }, React.createElement("img", {
    height: "20",
    src: "https://do6eyjibs3jse.cloudfront.net/assets/experiments/mc_press/espn-2aca223117c3e92562149a240ff5dab1619562b8de78ed05cae0ce69c50afae8.svg"
  })), React.createElement("div", {
    className: "col-md-2 mc-text--muted mc-text-center"
  }, React.createElement("img", {
    height: "20",
    src: "https://do6eyjibs3jse.cloudfront.net/assets/experiments/mc_press/vanity_fair-cdfde3c2628fa297d4bba5cf9aaa5786cc0f0fb8c66a593bb5da88afe407ec99.svg"
  }))))), React.createElement("div", {
    className: "mc-background--dark"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "mc-section"
  }, React.createElement("div", {
    className: "mc-section__header"
  }, React.createElement("h2", {
    className: "mc-text-h3 mc-text-center"
  }, "Now Available")), React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-12"
  }, React.createElement(ResponsiveHandler, null, function (_ref) {
    var ltMD = _ref.ltMD;
    return React.createElement(HoverHandler, null, function (_ref2) {
      var hovering = _ref2.hovering;
      return React.createElement(Tile, {
        aspectRatio: ltMD ? '16x9' : '519x187'
      }, React.createElement(AnimationHandler, {
        type: "ken-burns",
        animating: hovering
      }, React.createElement(TileImage, {
        imageUrl: "https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1473/original/1520466687-Featured_Tile.jpg%3F1520466687"
      })), React.createElement(TileOverlay, null), React.createElement(AnimationHandler, {
        type: "lift",
        animating: hovering
      }, React.createElement(TileCaption, {
        title: "Malcom Gladwell",
        subtitle: "Teaches Writing"
      })));
    });
  })), React.createElement("div", {
    className: "col-md-6"
  }, React.createElement(HoverHandler, null, function (_ref3) {
    var hovering = _ref3.hovering;
    return React.createElement(Tile, {
      aspectRatio: "16x9"
    }, React.createElement(AnimationHandler, {
      type: "ken-burns",
      animating: hovering
    }, React.createElement(TileImage, {
      imageUrl: "https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1049/original/1510617187-Class_Tile.jpg%3F1510617187"
    })), React.createElement(TileOverlay, null), React.createElement(AnimationHandler, {
      type: "lift",
      animating: hovering
    }, React.createElement(TileCaption, {
      title: "Alice Waters",
      subtitle: "Teaches the Art of Home Cooking"
    })));
  })), React.createElement("div", {
    className: "col-md-6"
  }, React.createElement(HoverHandler, null, function (_ref4) {
    var hovering = _ref4.hovering;
    return React.createElement(Tile, {
      aspectRatio: "16x9"
    }, React.createElement(AnimationHandler, {
      type: "ken-burns",
      animating: hovering
    }, React.createElement(TileImage, {
      imageUrl: "https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/343/original/1513219465-Class_Tile.jpg%3F1513219465"
    })), React.createElement(TileOverlay, null), React.createElement(AnimationHandler, {
      type: "lift",
      animating: hovering
    }, React.createElement(TileCaption, {
      title: "Annie Leibovitz",
      subtitle: "Teaches Photography"
    })));
  })))), React.createElement("div", {
    className: "mc-section"
  }, React.createElement("div", {
    className: "mc-section__header"
  }, React.createElement("h2", {
    className: "mc-text-h3 mc-text-center"
  }, "What Students Are Saying")), React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-md-4"
  }, React.createElement("div", {
    className: "mc-card mc-card--equal-height mc-background--light mc-text--invert"
  }, React.createElement("div", {
    className: "row align-items-center small-gutters"
  }, React.createElement("div", {
    className: "col col-auto"
  }, React.createElement("img", {
    width: "56",
    src: "https://do6eyjibs3jse.cloudfront.net/assets/experiments/stars/instructor-al-300e6379265c09b2f4b659df27a10cace702dd3beb031af97178f4f1b683adc3.png"
  })), React.createElement("div", {
    className: "col"
  }, React.createElement("h4", {
    className: "mc-text-h4"
  }, "Annie Leibovitz"), React.createElement("h5", {
    className: "mc-text-h5 mc-text--muted"
  }, "Photography")), React.createElement("div", {
    className: "col-12"
  }, React.createElement("p", null, "Annie's MasterClass offered insight into her approach, but also offered the permission to create, create, create! And with a tenacity I had been afraid to embody.")), React.createElement("div", {
    className: "col-auto"
  }, React.createElement("img", {
    src: "https://do6eyjibs3jse.cloudfront.net/assets/experiments/stars/user-al-9f00247416a322eee5fcefe147d2c9172a018cda43240ab2bdb383fa84100db7.png"
  })), React.createElement("div", {
    className: "col"
  }, React.createElement("p", {
    className: "mc-text--muted"
  }, "Jesse L."))))), React.createElement("div", {
    className: "col-md-4"
  }, React.createElement("div", {
    className: "mc-card mc-card--equal-height mc-background--light mc-text--invert"
  }, React.createElement("div", {
    className: "row align-items-center small-gutters"
  }, React.createElement("div", {
    className: "col col-auto"
  }, React.createElement("img", {
    width: "56",
    src: "https://do6eyjibs3jse.cloudfront.net/assets/experiments/stars/instructor-gr-24c1d9b59bbeadd671a0ef5140e137d07e26368f5b0984a0b90fe5f794700de0.png"
  })), React.createElement("div", {
    className: "col"
  }, React.createElement("h4", {
    className: "mc-text-h4"
  }, "Gordon Ramsay"), React.createElement("h5", {
    className: "mc-text-h5 mc-text--muted"
  }, "Cooking")), React.createElement("div", {
    className: "col-12"
  }, React.createElement("p", null, "I loved this class, I learned to create rather than follow recipes and how to think outside the box! I've always loved cooking, this class has taken me to a new level!")), React.createElement("div", {
    className: "col-auto"
  }, React.createElement("img", {
    src: "https://do6eyjibs3jse.cloudfront.net/assets/experiments/stars/user-al-9f00247416a322eee5fcefe147d2c9172a018cda43240ab2bdb383fa84100db7.png"
  })), React.createElement("div", {
    className: "col"
  }, React.createElement("p", {
    className: "mc-text--muted"
  }, "Pamela E."))))), React.createElement("div", {
    className: "col-md-4"
  }, React.createElement("div", {
    className: "mc-card mc-card--equal-height mc-background--light mc-text--invert"
  }, React.createElement("div", {
    className: "row align-items-center small-gutters"
  }, React.createElement("div", {
    className: "col col-auto"
  }, React.createElement("img", {
    width: "56",
    src: "https://do6eyjibs3jse.cloudfront.net/assets/experiments/stars/instructor-jp-cde7e157ed95191ad3167e5dea00394798decee7462fc897d71ac6e450cd8b79.png"
  })), React.createElement("div", {
    className: "col"
  }, React.createElement("h4", {
    className: "mc-text-h4"
  }, "James Patterson"), React.createElement("h5", {
    className: "mc-text-h5 mc-text--muted"
  }, "Writing")), React.createElement("div", {
    className: "col-12"
  }, React.createElement("p", null, "These classes are the important keys to unlocking our written creativity. If you have belief, freedom and discipline, then who knows what the future will hold.")), React.createElement("div", {
    className: "col-auto"
  }, React.createElement("img", {
    src: "https://do6eyjibs3jse.cloudfront.net/assets/experiments/stars/user-al-9f00247416a322eee5fcefe147d2c9172a018cda43240ab2bdb383fa84100db7.png"
  })), React.createElement("div", {
    className: "col"
  }, React.createElement("p", {
    className: "mc-text--muted"
  }, "Jean-Paul W."))))))), React.createElement("div", {
    className: "mc-section"
  }, React.createElement("div", {
    className: "mc-section__header"
  }, React.createElement("h2", {
    className: "mc-text-h3 mc-text-center"
  }, "Now Available")), React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-12"
  }, React.createElement(HoverHandler, null, function (_ref5) {
    var hovering = _ref5.hovering;
    return React.createElement(Tile, {
      aspectRatio: "519x187"
    }, React.createElement(AnimationHandler, {
      type: "ken-burns",
      animating: hovering
    }, React.createElement(TileImage, {
      imageUrl: "https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1532/original/1521243500-Featured_Tile.jpg%3F1521243500"
    })), React.createElement(TileOverlay, null), React.createElement(AnimationHandler, {
      type: "lift",
      animating: hovering
    }, React.createElement(TileCaption, {
      title: "Spike Lee",
      subtitle: "Teaches Filmmaking"
    })));
  })), React.createElement("div", {
    className: "col-md-6"
  }, React.createElement(HoverHandler, null, function (_ref6) {
    var hovering = _ref6.hovering;
    return React.createElement(Tile, {
      aspectRatio: "16x9"
    }, React.createElement(AnimationHandler, {
      type: "ken-burns",
      animating: hovering
    }, React.createElement(TileImage, {
      imageUrl: "https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1689/original/1528446991-Class_Tile.jpg%3F1528446991"
    })), React.createElement(TileOverlay, null), React.createElement(AnimationHandler, {
      type: "lift",
      animating: hovering
    }, React.createElement(TileCaption, {
      title: "Daniel Negreanu",
      subtitle: "Teaches Poker"
    })));
  })), React.createElement("div", {
    className: "col-md-6"
  }, React.createElement(HoverHandler, null, function (_ref7) {
    var hovering = _ref7.hovering;
    return React.createElement(Tile, {
      aspectRatio: "16x9"
    }, React.createElement(AnimationHandler, {
      type: "ken-burns",
      animating: hovering
    }, React.createElement(TileImage, {
      imageUrl: "https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1752/original/1530892888-Class_Tile.jpg%3F1530892888"
    })), React.createElement(TileOverlay, null), React.createElement(AnimationHandler, {
      type: "lift",
      animating: hovering
    }, React.createElement(TileCaption, {
      title: "Margaret Atwood",
      subtitle: "Teaches Creative Writing"
    })));
  })))), React.createElement("div", {
    className: "mc-section"
  }, React.createElement("div", {
    className: "row align-items-center"
  }, React.createElement("div", {
    className: "col-lg-4"
  }, React.createElement("div", {
    className: "mc-section__header"
  }, React.createElement("h2", {
    className: "mc-text-h1 mc-text-center mc-text-lg-left"
  }, "Instructor Announcements"), React.createElement("p", {
    className: "mc-text-center mc-text-lg-left mc-text--muted"
  }, "Learn from the world\u2019s greatest minds."), React.createElement("br", null), React.createElement("div", {
    className: "row small-gutters justify-content-center justify-content-lg-start"
  }, React.createElement("div", {
    className: "col-auto"
  }, React.createElement(ChevronLeft, {
    className: "mc-icon--7x mc-icon--circled mc-text--muted"
  })), React.createElement("div", {
    className: "col-auto"
  }, React.createElement(ChevronRight, {
    className: "mc-icon--7x mc-icon--circled"
  }))))), React.createElement("div", {
    className: "col-lg-8"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-lg-6"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-12"
  }, React.createElement("div", {
    className: "mc-card mc-background--light mc-text--invert"
  }, React.createElement("div", {
    className: "row align-items-center small-gutters"
  }, React.createElement("div", {
    className: "col col-auto"
  }, React.createElement("img", {
    width: "56",
    src: "https://d3e9iqx18mbphw.cloudfront.net/images/1429/original/1518557721-Slide_Thumb.jpg?1518557721"
  })), React.createElement("div", {
    className: "col"
  }, React.createElement("h4", {
    className: "mc-text-h4"
  }, "Malcom Gladwell"), React.createElement("h5", {
    className: "mc-text-h5 mc-text--muted"
  }, "@Gladwell")), React.createElement("div", {
    className: "col-12"
  }, React.createElement("p", null, "If my books aren't enough for you, I've done a really fun writing seminar!", React.createElement("br", null), React.createElement("a", {
    href: "#",
    className: "mc-text--twitter"
  }, "@MasterClass")))))), React.createElement("div", {
    className: "col-12"
  }, React.createElement("div", {
    className: "mc-card mc-background--light mc-text--invert"
  }, React.createElement("div", {
    className: "row align-items-center small-gutters"
  }, React.createElement("div", {
    className: "col col-auto"
  }, React.createElement("img", {
    width: "56",
    src: "https://d3e9iqx18mbphw.cloudfront.net/images/1194/original/1512075998-Slide_Thumb.jpg?1512075998"
  })), React.createElement("div", {
    className: "col"
  }, React.createElement("h4", {
    className: "mc-text-h4"
  }, "Armin Van Buuren"), React.createElement("h5", {
    className: "mc-text-h5 mc-text--muted"
  }, "@arminvanbuuren")), React.createElement("div", {
    className: "col-12"
  }, React.createElement("p", null, "My", React.createElement("a", {
    href: "#",
    className: "mc-text--twitter"
  }, "@masterclass"), "is now live! So proud to be able to share everything I know about dance music with you. Join me in the studio:", React.createElement("a", {
    href: "#",
    className: "mc-text--twitter"
  }, "http://www.masterclass.com/avb")))))))), React.createElement("div", {
    className: "col-lg-6"
  }, React.createElement("div", {
    className: "mc-card mc-card--equal-height mc-background--light mc-text--invert"
  }, React.createElement("div", {
    className: "row align-items-center small-gutters"
  }, React.createElement("div", {
    className: "col col-auto"
  }, React.createElement("img", {
    width: "56",
    src: "https://d3e9iqx18mbphw.cloudfront.net/images/528/original/1488402263-1488323293-SM_SlideThumb_V1_A.jpg?1488402263"
  })), React.createElement("div", {
    className: "col"
  }, React.createElement("h4", {
    className: "mc-text-h4"
  }, "Steve Martin")), React.createElement("div", {
    className: "col-12"
  }, React.createElement("img", {
    src: "https://do6eyjibs3jse.cloudfront.net/assets/experiments/instructor-announcements/steve-martin-7ff79ae2d7ec7677b76aa0dfe1c51b47c8b54d6065d330be11c49388e68624ad.jpg"
  }), React.createElement("p", null, "I'm told people are signing up in droves (a car made in the 30s) for my", React.createElement("a", {
    href: "#",
    className: "mc-text--twitter"
  }, "MasterClass"), "in comedy. For the aspiring comedian, writer, or future world leader."))))))))))), React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "mc-section"
  }, React.createElement("div", {
    className: "mc-section__header"
  }, React.createElement("h4", {
    className: "mc-text-h4 mc-text-center mc-text--muted"
  }, "Stay up to date with MasterClass")), React.createElement("div", {
    className: "row justify-content-center"
  }, React.createElement("div", {
    className: "col-auto"
  }, React.createElement(Twitter, {
    className: "mc-icon--15x mc-icon--circled mc-text--muted"
  })), React.createElement("div", {
    className: "col-auto"
  }, React.createElement(Facebook, {
    className: "mc-icon--15x mc-icon--circled mc-text--muted"
  })), React.createElement("div", {
    className: "col-auto"
  }, React.createElement(Instagram, {
    className: "mc-icon--15x mc-icon--circled mc-text--muted"
  }))))), React.createElement(Footer, null));
});