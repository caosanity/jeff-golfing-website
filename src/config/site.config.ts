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
    showInstagram: false,

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
    photo: "/IMG_9043.jpeg",

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
  // INSTAGRAM STATS — SAMPLE DATA, replace with real analytics
  // --------------------------------------------------------------------------
  instagram: {
    followers: "42.3K",
    avgEngagement: "6.8%",
    avgViews: "18.2K",
    avgLikes: "2,940",
  },

  // --------------------------------------------------------------------------
  // TIKTOK STATS
  // --------------------------------------------------------------------------
  tiktok: {
    followers: "1,120",
    totalViews: "2.4M",
    totalLikes: "104K",
    totalShares: "23.8K",
  },

  // --------------------------------------------------------------------------
  // AUDIENCE — malePercentage + femalePercentage should add up to 100.
  // ageGroups / viewerLocation / followerLocation percentages should each add up to 100.
  // --------------------------------------------------------------------------
  audience: {
    malePercentage: 82,
    femalePercentage: 18,

    ageGroups: [
      { label: "18-24", percentage: 27.4 },
      { label: "25-34", percentage: 50.5 },
      { label: "35-44", percentage: 13.2 },
      { label: "45-54", percentage: 5.5 },
      { label: "55+", percentage: 3.4 },
    ],

    viewerLocation: [
      { label: "Canada", percentage: 41.3 },
      { label: "United States", percentage: 28.3 },
      { label: "Australia", percentage: 6.5 },
      { label: "United Kingdom", percentage: 5.4 },
      { label: "Other", percentage: 18.5 },
    ],

    followerLocation: [
      { label: "United States", percentage: 27.3 },
      { label: "Canada", percentage: 17.2 },
      { label: "United Kingdom", percentage: 9.2 },
      { label: "Australia", percentage: 4.0 },
      { label: "Other", percentage: 42.3 },
    ],
  },

  // --------------------------------------------------------------------------
  // PARTNERS — add, remove, or reorder freely. This is partner1, partner2,
  // partner3... as a list, so there's no limit on how many you add.
  // Set "logo" to a path in /public to show an image instead of the name.
  // Set "url" to the partner's website to make the logo clickable (opens in
  // a new tab). Leave "" to keep it non-clickable.
  // --------------------------------------------------------------------------
  partners: [
    {
      name: "SwingPop Golf",
      logo: "/Swing_Logo_Dark_Green.jpg",
      url: "https://swingpopgolf.com/",
    }, // partner1
  ],

  // --------------------------------------------------------------------------
  // FEATURED POSTS — add, remove, or reorder freely.
  // platform must be "Instagram" or "TikTok"
  // category must be "Products", "Play", or "Places"
  // Set "image" to a path in /public to show a real thumbnail instead of the
  // placeholder color background.
  // Set "videoUrl" to the real post URL (e.g. "https://www.tiktok.com/@jeffgolfing/video/1234567890")
  // to make the tile clickable — it opens the real post in a new tab. Leave "" to keep it non-clickable.
  // --------------------------------------------------------------------------
  featuredPosts: [
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
export type PostCategory = "Products" | "Play" | "Places";

export type FeaturedPost = {
  platform: Platform;
  category: PostCategory;
  title: string;
  image: string;
  videoUrl: string;
};

export default siteConfig;
