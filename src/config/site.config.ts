// ============================================================================
// SITE CONFIG — this is the only file you need to edit to update stats,
// numbers, photos, and posts across both the Links page and the Media Kit.
// ============================================================================
//
// HOW TO ADD A PHOTO / LOGO / THUMBNAIL:
//   1. Drop the image file into the /public folder (e.g. /public/profile.jpg)
//   2. Set the matching field below to "/profile.jpg" (leading slash, no "public")
//   3. Leave a field as "" (empty string) to keep the placeholder look
//
// ============================================================================

const siteConfig = {
  // --------------------------------------------------------------------------
  // SECTION VISIBILITY — toggle sections on/off without deleting their data
  // --------------------------------------------------------------------------
  visibility: {
    // Instagram stats card in the Media Kit's Insights & Data section.
    // Set to true once Instagram follower count is worth showing off.
    showInstagram: true,

    // Partners section in the Media Kit. Set to true once there are real
    // partner logos to show.
    showPartners: true,

    // "Places" filter tab and posts in Featured Posts. Set to true to bring
    // course/location posts back into the grid.
    showPlacesPosts: true,

    // "Play" filter tab and posts in Featured Posts. Set to true to bring
    // on-course/gameplay posts back into the grid.
    showPlayPosts: false,
  },

  // --------------------------------------------------------------------------
  // PROFILE — used on both the Links page and the Media Kit
  // --------------------------------------------------------------------------
  profile: {
    name: "Jeff Golfing",
    location: "TORONTO, CANADA",
    niche: "Golf Content Creator",

    // Path to your profile photo in /public. Leave "" to show initials instead.
    photo: "/profile-photo.jpg",

    // Short description — shown on the Links page under your name
    description: "Sharing my golf adventures from beautiful courses around the world to hidden gem golf accesory finds for golfers of all levels to enjoy and relate to!⛳️",

    // Longer description — shown on the Media Kit profile card
    longDescription:
      "Sharing my golf adventures from beautiful courses around the world to hidden gem golf accesory finds for golfers of all levels to enjoy and relate to!⛳️",

    email: "jeffgolfsugc@gmail.com",

    instagramHandle: "@jeffgolfing",
    instagramUrl: "https://www.instagram.com/jeffgolfing",
    tiktokHandle: "@jeffgolfing",
    tiktokUrl: "https://www.tiktok.com/@jeffgolfing",
  },

  // --------------------------------------------------------------------------
  // PARTNERSHIP FORMATS — shown under the Media Kit profile card.
  // Numbered 01, 02, 03... automatically in the order listed.
  // --------------------------------------------------------------------------
  partnershipFormats: [
    {
      title: "UGC Videos/Carousel",
      description:
        "High-quality short-form video/carousel assets you own outright. Use them in paid ads, email, or any channel.",
    },
    {
      title: "Affiliate Partnerships",
      description:
        "Commission-based deals with trackable links: low risk, performance-driven, fully measurable.",
    },
    {
      title: "Product Reviews",
      description:
        "On-course demos and honest reviews. Real feedback from someone who actually uses the gear.",
    },
    {
      title: "Content Packages",
      description:
        "Multi-piece short-form bundles for product launches or seasonal campaigns. Delivered fast.",
    },
  ],

  // --------------------------------------------------------------------------
  // WHY PARTNER — shown under Partnership Formats
  // --------------------------------------------------------------------------
  whyPartner: {
    eyebrow: "Why partner with a micro-creator",
    heading: "Small account. Real results.",
    points: [
      {
        title: "Stronger engagement",
        description:
          "smaller, highly targeted audiences are typically more loyal and responsive than those of larger accounts",
      },
      {
        title: "UGC rights included",
        description:
          "keep the content and repurpose it across paid ads, email, and your own socials",
      },
      {
        title: "Early-stage pricing",
        description: "get in before the audience (and rates) scale",
      },
      {
        title: "Authentic voice",
        description: "a golf customer myself that is always looking for the next golf find",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // INSTAGRAM STATS
  // --------------------------------------------------------------------------
  instagram: {
    // Small text shown beside the Instagram handle
    note: "Account Created: August 2026",
    followers: "220",
    totalViews: "155K",
    interactions: "6.3K",
  },

  // --------------------------------------------------------------------------
  // TIKTOK STATS
  // --------------------------------------------------------------------------
  tiktok: {
    // Small text shown beside the TikTok handle
    note: "Account Created: January 2026",
    followers: "1,220",
    totalViews: "2.7M",
    totalLikes: "115K",
    totalShares: "25.4K",
  },

  // --------------------------------------------------------------------------
  // AUDIENCE — malePercentage + femalePercentage should add up to 100.
  // ageGroups / viewerLocation / followerLocation percentages should each add up to 100.
  // --------------------------------------------------------------------------
  audience: {
    malePercentage: 81,
    femalePercentage: 19,

    ageGroups: [
      { label: "18-24", percentage: 27.4 },
      { label: "25-34", percentage: 50.5 },
      { label: "35-44", percentage: 13.2 },
      { label: "45-54", percentage: 5.5 },
      { label: "55+", percentage: 3.4 },
    ],

    viewerLocation: [
      { label: "Canada", percentage: 46.1 },
      { label: "United States", percentage: 26 },
      { label: "Australia", percentage: 6 },
      { label: "United Kingdom", percentage: 4.9 },
      { label: "Other", percentage: 17 },
    ],

    followerLocation: [
      { label: "United States", percentage: 27.1 },
      { label: "Canada", percentage: 18.8 },
      { label: "United Kingdom", percentage: 8.9 },
      { label: "Australia", percentage: 4.2 },
      { label: "Other", percentage: 41 },
    ],
  },

  // --------------------------------------------------------------------------
  // PARTNERS — add, remove, or reorder freely. This is partner1, partner2,
  // partner3... as a list, so there's no limit on how many you add.
  // Set "logo" to a path in /public to show an image instead of the name.
  // Set "url" to the partner's website to make the logo clickable (opens in
  // a new tab). Leave "" to keep it non-clickable.
  // Set "logoHeight" to shrink/grow just that one logo (in px). Leave unset
  // to use the default size (96px).
  // --------------------------------------------------------------------------
  partners: [
    {
      name: "SwingPop Golf",
      logo: "/Swing_Logo_Dark_Green.jpg",
      url: "https://swingpopgolf.com/",
    }, // partner1
    {
      name: "Golf Links",
      logo: "/golflinks-logo-header.png",
      url: "https://golflinks.ca/",
    }, // partner2
    {
      name: "Groove It",
      logo: "/grooveit.png",
      url: "https://grooveitbrush.com/",
      logoHeight: 56,
    }, // partner3
    {
      name: "Gameday Golf Gear",
      logo: "/gameday.jpg",
      url: "https://www.gamedaygolfgear.com/",
    }, // partner4
    {
      name: "dadafunk",
      logo: "/dadafunklogo.jpg",
      url: "https://dadafunk.com/",
      logoHeight: 40,
    }, // partner5
  ] as Partner[],

  // --------------------------------------------------------------------------
  // FEATURED POSTS — add, remove, or reorder freely.
  // platform must be "Instagram" or "TikTok"
  // category must be "Partnerships", "Products", "Play", or "Places"
  // Set "image" to a path in /public to show a real thumbnail instead of the
  // placeholder color background.
  // Set "videoUrl" to the real post URL (e.g. "https://www.tiktok.com/@jeffgolfing/video/1234567890")
  // to make the tile clickable — it opens the real post in a new tab. Leave "" to keep it non-clickable.
  // --------------------------------------------------------------------------
  featuredPosts: [
    // Partnership post: Silver Brooke Golf Club
    {
      platform: "TikTok",
      category: "Partnerships",
      title: "Best value championship course in the GTA?",
      image: "/tiktok-silver-brooke.jpg",
      videoUrl: "https://www.tiktok.com/@jeffgolfing/video/7680962798930726151",
    },
    // Partnership post: South Ajax
    {
      platform: "TikTok",
      category: "Partnerships",
      title: "Best Friday night spot in the GTA?",
      image: "/tiktok-south-ajax.jpg",
      videoUrl: "https://www.tiktok.com/@jeffgolfing/video/7684657393707355410",
    },
    // Partnership post: dadafunk
    {
      platform: "TikTok",
      category: "Partnerships",
      title: "Day in the life: weekday edition",
      image: "/tiktok-dadafunk.jpg",
      videoUrl: "https://www.tiktok.com/@jeffgolfing/video/7692442539130932488",
    },
    // Places post: Glen Abbey
    {
      platform: "TikTok",
      category: "Places",
      title: "Glen Abbey: course review",
      image: "/tiktok-glen-abbey.jpg",
      videoUrl: "https://www.tiktok.com/@jeffgolfing/video/7693514965759577351",
    },
    // TikTok post 1
    {
      platform: "TikTok",
      category: "Products",
      title: "Giraffe themed putter?!",
      image: "/tiktok-odyssey-putter.jpg",
      videoUrl: "https://www.tiktok.com/@jeffgolfing/video/7653891870728228114",
    },
    // TikTok post 2
    {
      platform: "TikTok",
      category: "Places",
      title: "Angus Glen North: worth it?",
      image: "/tiktok-angus-glen-north.jpg",
      videoUrl: "https://www.tiktok.com/@jeffgolfing/video/7668085224252738824",
    },
    // TikTok post 3
    {
      platform: "TikTok",
      category: "Play",
      title: "Breaking 80: the recap",
      image: "",
      videoUrl: "",
    },
    // TikTok post 4
    {
      platform: "TikTok",
      category: "Play",
      title: "3 shots that saved my round",
      image: "",
      videoUrl: "",
    },
    // TikTok post 5
    {
      platform: "TikTok",
      category: "Places",
      title: "I played golf in Japan?!",
      image: "/tiktok-golf-japan.jpg",
      videoUrl: "https://www.tiktok.com/@jeffgolfing/video/7646623492342844680",
    },
    // TikTok post 6
    {
      platform: "TikTok",
      category: "Products",
      title: "Noob regrips clubs for the first time",
      image: "/tiktok-regripping.jpg",
      videoUrl: "https://www.tiktok.com/@jeffgolfing/video/7666483507971116306",
    },
    // TikTok post 7
    {
      platform: "TikTok",
      category: "Products",
      title: "Look like the pros for cheap",
      image: "/tiktok-uniqlo-polo.jpg",
      videoUrl: "https://www.tiktok.com/@jeffgolfing/video/7673157851979779336",
    },
    // TikTok post 8
    {
      platform: "TikTok",
      category: "Places",
      title: "Grayhawk Raptor: honest review",
      image: "/tiktok-grayhawk-raptor.jpg",
      videoUrl: "https://www.tiktok.com/@jeffgolfing/video/7626943779404074258",
    },
  ] as FeaturedPost[],
};

// --------------------------------------------------------------------------
// Types (no need to edit below this line)
// --------------------------------------------------------------------------
export type Platform = "Instagram" | "TikTok";
export type PostCategory = "Partnerships" | "Products" | "Play" | "Places";

export type FeaturedPost = {
  platform: Platform;
  category: PostCategory;
  title: string;
  image: string;
  videoUrl: string;
};

export type Partner = {
  name: string;
  logo: string;
  url: string;
  logoHeight?: number;
};

export default siteConfig;
