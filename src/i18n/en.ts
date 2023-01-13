export default {
  account: {
    getStarted: "Get started",
    wallet: "Your Wallet",
    address: "Sentinel Address",
    or: "Or",
    balance: "Your Balance",
    balanceUpdate: "Updated {time} ago",
    buyTokens: "Buy DVPN tokens",
  },

  setup: {
    greeting: {
      title: "<span class='text-blue'>Blue</span>VPN",
      text: "With <span class='text-blue'>BlueVPN</span> your traffic is <span class='text-blue'>encrypted</span>, your IP address is hidden, and above all, your <span class='text-blue'>privacy</span> is upheld",
    },
    onboarding: {
      encryption: {
        title: "<span class='text-blue'>BlueVPN</span> encrypts your traffic",
        text: "Stay <span class='text-blue'>hidden</span> online with our VPN and surf the web without any trace of your location or activity going back to your ISP."
      },
      freedom: {
        title: "Browse the Internet <span class='text-blue'>freely</span>.",
        text: "Unlock access to restricted <span class='text-blue'>websites</span> with our VPN and browse the internet freely."
      },
      safety: {
        title: "Stay <span class='text-blue'>safe</span> with BlueVPN",
        text: "Stay safe and <span class='text-blue'>secure</span> online with our VPN, the ultimate <span class='text-blue'>shield</span> for your personal information and internet activity."
      }
    },
    complete: {
      title: "You’re all set!",
      text: "Enjoy <span class='text-blue'>secure</span> & <span class='text-blue'>censorship</span>-free connectivity <span class='text-blue'>with dVPN!</span>",
      continue: "Let’s go!",
    },
    mnemonic: {
      create: {
        title: "You’ll need a mnemonic",
        text: "Mnemonic is a <span class='text-blue'>special</span> 24-word phrase which is used as a key to your blockchain <span class='text-blue'>account</span>.",
      },
      check: {
        title: "Here’s your mnemonic",
        text: "Keep it <span class='text-blue'>secret</span> — it is your key to your blockchain account. Write it down on a piece of paper & store in a <span class='text-blue'>safe</span> place.",
        timerTitle: "Just making sure you write it down 🙂",
      },
      action: {
        create: "Create new mnemonic",
        recover: "I already have a mnemonic",
        confirmCheck: "OK, I wrote it down",
      },
    },
  },

  settings: {
    modalTitle: "Settings",
    account: "Account",
    dns: "DNS Server",
    troubleshooting: "Troubleshooting",
    stopSessions: {
      title: "Stop all sessions",
      text: "This will stop all active VPN sessions under your account and will turn your protection off. Use this for troubleshooting only.",
      button: "Stop sessions",
    },
    removeConfigurations: {
      title: "Remove VPN configurations",
      text: "This will remove all the VPN configuration changes done by BlueVPN and will turn your protection off. Use this for troubleshooting only.",
      button: "Reset VPN configuration",
    },
  },

  connection: {
    disconnect: "Disconnect",
    connect: "Connect",
    youAre: "You are",
    protected: "Protected",
    unprotected: "Unprotected",
    upload: "Upload",
    download: "Download",
    bandwidth: "Bandwidth left",
    yourIp: "Your ip: {ip}"
  },

  node: {
    dvpn: "DVPN",
    list: {
      title: "DVPN",
      noData: {
        title: "Nothing found",
        text: "We found no nodes matching your search criteria.",
      },
      noSubscriptions: {
        title: "No subscriptions",
        text: "You don’t have any DVPN node subscription yet.",
        action: "Select a Node",
      },
      search: {
        placeholder: "Search",
      },
      loadingFailure: {
        title: "Failed to load nodes",
        text: "Please check if you are connected to the Internet and try again.",
      },
      tab: {
        subscriptions: "Subscriptions",
        allNodes: "All Nodes",
      },
    },
    parameters: {
      price: "Price",
      latency: "Latency",
      peers: "Peers",
      address: "Node Address",
      connectedPeers: "Connected peers count",
      uploadSpeed: "Upload speed",
      provider: "Node provider",
      downloadSpeed: "Download speed",
      version: "Version",
      type: "Type of node",
      country: "Country",
      city: "City",
      community: "Community",
    },
    unavailable: "Node Unavailable",
  },

  continent: {
    AF: "Africa",
    AS: "Asia",
    EU: "Europe",
    NA: "North America",
    SA: "South America",
    RW: "Rest of the world",
    parameters: {
      availableNode: "{count} nodes available",
    },
    any: "Any continents",
    anyCountries: "Any countries",
  },

  subscription: {
    list: {
      noData: "No subscriptions found",
    },
  },

  action: {
    copy: "Copy",
    copied: "Copied!",
    back: "Back",
    done: "Done",
    subscribe: "Subscribe",
    unsubscribe: "Unsubscribe",
    continue: "Continue",
    filter: "Filter",
    cancel: "Cancel",
    apply: "Apply",
    unblur: "Tap to unblur",
    delete: "Delete",
    retry: "Retry",
    switch: "Switch",
    search: "Search",
    next: "Next",
    skip: "Skip"
  },

  subscriptionModal: {
    header: "Subscribe to",
    priceMessage: "will be paid upfront to node provider",
  },

  unsubscriptionModal: {
    header: "Unsubscribe",
    message: "Are you sure to unsubscribe from {name}?",
  },

  nodesFiltersModal: {
    header: "Filter By",
    body: {
      continent: "Continent",
      country: "Country",
      minPrice: "Minimum price",
      maxPrice: "Maximum price",
      orderBy: "Order by",
    },
    applyFilters: "Apply filters",
  },

  purchaseModal: {
    header: "Buy dVPN tokens",
    body: {
      header: "Buy tokens and trade them for GB!",
      noData: "No products are available",
      payment:
        "The payment of {price} will be charged to your iTunes account at confirmation of purchase. Tokens will be credited to your account within few minutes after purchase.",
    },
    footer: {
      buyNow: "Buy now",
    },
  },
};
