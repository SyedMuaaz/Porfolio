import React, { useMemo, useState } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gnomeThumb from "../../Assets/Projects/GnomeWars/Thumbnail.jpg";
import crystaleThumb from "../../Assets/Projects/Crystale/Thumbnail.png";
import siteLogo from "../../Assets/logo.png";
import britariaThumb from "../../Assets/Projects/Britaria/Thumbnail.jpg";

function Projects() {
  const [activeKey, setActiveKey] = useState("All");

  // Helper to import all images in a folder (excluding Thumbnail)
  // Works with CRA's webpack setup
  const importAll = (r) =>
    r
      .keys()
      .filter((key) => !/thumbnail\.(png|jpe?g|webp)$/i.test(key))
      .map(r);

  // Auto-load screenshots for Crystale if present
  let crystaleScreens = [];
  try {
    // Only direct files, not subfolders
    /* eslint-disable global-require */
    /* eslint-disable import/no-dynamic-require */
    const ctx = require.context(
      "../../Assets/Projects/Crystale",
      false,
      /\.(png|jpe?g|webp)$/
    );
    crystaleScreens = importAll(ctx);
  } catch (e) {
    crystaleScreens = [];
  }

  // Auto-load screenshots for Britaria if present
  let britariaScreens = [];
  try {
    const ctxB = require.context(
      "../../Assets/Projects/Britaria",
      false,
      /\.(png|jpe?g|webp)$/
    );
    britariaScreens = importAll(ctxB);
  } catch (e) {
    britariaScreens = [];
  }

  // Auto-load screenshots and thumbnail for MoonKarts if present
  let moonScreens = [];
  let moonThumb = siteLogo;
  try {
    const ctxM = require.context(
      "../../Assets/Projects/Moonkarts",
      false,
      /\.(png|jpe?g|webp)$/
    );
    // Screens without thumbnail
    moonScreens = importAll(ctxM);
    // Derive thumbnail if available, else fallback to first screenshot or site logo
    const keys = ctxM.keys();
    const thumbKey = keys.find((k) => /thumbnail\.(png|jpe?g|webp)$/i.test(k));
    if (thumbKey) {
      moonThumb = ctxM(thumbKey);
    } else if (moonScreens.length > 0) {
      moonThumb = moonScreens[0];
    }
  } catch (e) {
    moonScreens = [];
    moonThumb = siteLogo;
  }

  // Auto-load screenshots and thumbnail for MurlanPro if present
  let murlanScreens = [];
  let murlanThumb = siteLogo;
  try {
    const ctxMP = require.context(
      "../../Assets/Projects/MurlanPro",
      false,
      /\.(png|jpe?g|webp)$/
    );
    murlanScreens = importAll(ctxMP);
    const keysMP = ctxMP.keys();
    const thumbKeyMP = keysMP.find((k) => /thumbnail\.(png|jpe?g|webp)$/i.test(k));
    if (thumbKeyMP) {
      murlanThumb = ctxMP(thumbKeyMP);
    } else if (murlanScreens.length > 0) {
      murlanThumb = murlanScreens[0];
    }
  } catch (e) {
    murlanScreens = [];
    murlanThumb = siteLogo;
  }

  // Auto-load screenshots and thumbnail for PollenPop if present
  let popScreens = [];
  let popThumb = siteLogo;
  try {
    const ctxPP = require.context(
      "../../Assets/Projects/PollenPop",
      false,
      /\.(png|jpe?g|webp)$/
    );
    popScreens = importAll(ctxPP);
    const keysPP = ctxPP.keys();
    const thumbKeyPP = keysPP.find((k) => /thumbnail\.(png|jpe?g|webp)$/i.test(k));
    if (thumbKeyPP) {
      popThumb = ctxPP(thumbKeyPP);
    } else if (popScreens.length > 0) {
      popThumb = popScreens[0];
    }
  } catch (e) {
    popScreens = [];
    popThumb = siteLogo;
  }

  // Auto-load screenshots and thumbnail for WordBuzzle if present
  let wbScreens = [];
  let wbThumb = siteLogo;
  try {
    const ctxWB = require.context(
      "../../Assets/Projects/WordBuzzle",
      false,
      /\.(png|jpe?g|webp)$/
    );
    wbScreens = importAll(ctxWB);
    const keysWB = ctxWB.keys();
    const thumbKeyWB = keysWB.find((k) => /thumbnail\.(png|jpe?g|webp)$/i.test(k));
    if (thumbKeyWB) {
      wbThumb = ctxWB(thumbKeyWB);
    } else if (wbScreens.length > 0) {
      wbThumb = wbScreens[0];
    }
  } catch (e) {
    wbScreens = [];
    wbThumb = siteLogo;
  }

  // Auto-load screenshots and thumbnail for StakeHouse if present
  let stakeScreens = [];
  let stakeThumb = siteLogo;
  try {
    const ctxS = require.context(
      "../../Assets/Projects/StakeHouse",
      false,
      /\.(png|jpe?g|webp)$/
    );
    stakeScreens = importAll(ctxS);
    const keysS = ctxS.keys();
    const thumbKeyS = keysS.find((k) => /thumbnail\.(png|jpe?g|webp)$/i.test(k));
    if (thumbKeyS) {
      stakeThumb = ctxS(thumbKeyS);
    } else if (stakeScreens.length > 0) {
      stakeThumb = stakeScreens[0];
    }
  } catch (e) {
    stakeScreens = [];
    stakeThumb = siteLogo;
  }

  // Auto-load screenshots and thumbnail for PhotoFinish if present
  let pfScreens = [];
  let pfThumb = siteLogo;
  try {
    const ctxPF = require.context(
      "../../Assets/Projects/PhotoFinish",
      false,
      /\.(png|jpe?g|webp)$/
    );
    pfScreens = importAll(ctxPF);
    const keysPF = ctxPF.keys();
    const thumbKeyPF = keysPF.find((k) => /thumbnail\.(png|jpe?g|webp)$/i.test(k));
    if (thumbKeyPF) {
      pfThumb = ctxPF(thumbKeyPF);
    } else if (pfScreens.length > 0) {
      pfThumb = pfScreens[0];
    }
  } catch (e) {
    pfScreens = [];
    pfThumb = siteLogo;
  }

  // Auto-load screenshots and thumbnail for HorseRacingManager2026 if present
  let hrmScreens = [];
  let hrmThumb = siteLogo;
  try {
    const ctxHRM = require.context(
      "../../Assets/Projects/HorseRacingManager2026",
      false,
      /\.(png|jpe?g|webp)$/
    );
    hrmScreens = importAll(ctxHRM);
    const keysHRM = ctxHRM.keys();
    const thumbKeyHRM = keysHRM.find((k) =>
      /thumbnail\.(png|jpe?g|webp)$/i.test(k)
    );
    if (thumbKeyHRM) {
      hrmThumb = ctxHRM(thumbKeyHRM);
    } else if (hrmScreens.length > 0) {
      hrmThumb = hrmScreens[0];
    }
  } catch (e) {
    hrmScreens = [];
    hrmThumb = siteLogo;
  }

  // Auto-load screenshots and thumbnail for PsykineticBattleChess if present
  let pbcScreens = [];
  let pbcThumb = siteLogo;
  try {
    const ctxPBC = require.context(
      "../../Assets/Projects/PsykineticBattleChess",
      false,
      /\.(png|jpe?g|webp)$/
    );
    pbcScreens = importAll(ctxPBC);
    const keysPBC = ctxPBC.keys();
    const thumbKeyPBC = keysPBC.find((k) => /thumbnail\.(png|jpe?g|webp)$/i.test(k));
    if (thumbKeyPBC) {
      pbcThumb = ctxPBC(thumbKeyPBC);
    } else if (pbcScreens.length > 0) {
      pbcThumb = pbcScreens[0];
    }
  } catch (e) {
    pbcScreens = [];
    pbcThumb = siteLogo;
  }

  // Auto-load screenshots and thumbnail for PhonicZoom if present
  let pzScreens = [];
  let pzThumb = siteLogo;
  try {
    const ctxPZ = require.context(
      "../../Assets/Projects/PhonicZoom",
      false,
      /\.(png|jpe?g|webp)$/
    );
    pzScreens = importAll(ctxPZ);
    const keysPZ = ctxPZ.keys();
    const thumbKeyPZ = keysPZ.find((k) => /thumbnail\.(png|jpe?g|webp)$/i.test(k));
    if (thumbKeyPZ) {
      pzThumb = ctxPZ(thumbKeyPZ);
    } else if (pzScreens.length > 0) {
      pzThumb = pzScreens[0];
    }
  } catch (e) {
    pzScreens = [];
    pzThumb = siteLogo;
  }

  // Auto-load screenshots and thumbnail for TriviaMix if present
  let tmScreens = [];
  let tmThumb = siteLogo;
  try {
    const ctxTM = require.context(
      "../../Assets/Projects/TriviaMix",
      false,
      /\.(png|jpe?g|webp)$/
    );
    tmScreens = importAll(ctxTM);
    const keysTM = ctxTM.keys();
    const thumbKeyTM = keysTM.find((k) => /thumbnail\.(png|jpe?g|webp)$/i.test(k));
    if (thumbKeyTM) {
      tmThumb = ctxTM(thumbKeyTM);
    } else if (tmScreens.length > 0) {
      tmThumb = tmScreens[0];
    }
  } catch (e) {
    tmScreens = [];
    tmThumb = siteLogo;
  }

  // Auto-load screenshots and thumbnail for EnAbleAll if present
  let eaScreens = [];
  let eaThumb = siteLogo;
  try {
    const ctxEA = require.context(
      "../../Assets/Projects/EnAbleAll",
      false,
      /\.(png|jpe?g|webp)$/
    );
    eaScreens = importAll(ctxEA);
    const keysEA = ctxEA.keys();
    const thumbKeyEA = keysEA.find((k) => /thumbnail\.(png|jpe?g|webp)$/i.test(k));
    if (thumbKeyEA) {
      eaThumb = ctxEA(thumbKeyEA);
    } else if (eaScreens.length > 0) {
      eaThumb = eaScreens[0];
    }
  } catch (e) {
    eaScreens = [];
    eaThumb = siteLogo;
  }

  // Auto-load screenshots and thumbnail for EscobaHD if present
  let escScreens = [];
  let escThumb = siteLogo;
  try {
    const ctxESC = require.context(
      "../../Assets/Projects/EscobaHD",
      false,
      /\.(png|jpe?g|webp)$/
    );
    escScreens = importAll(ctxESC);
    const keysESC = ctxESC.keys();
    const thumbKeyESC = keysESC.find((k) => /thumbnail\.(png|jpe?g|webp)$/i.test(k));
    if (thumbKeyESC) {
      escThumb = ctxESC(thumbKeyESC);
    } else if (escScreens.length > 0) {
      escThumb = escScreens[0];
    }
  } catch (e) {
    escScreens = [];
    escThumb = siteLogo;
  }

  // Auto-load screenshots and thumbnail for JHGuitarApp if present
  let jhgScreens = [];
  let jhgThumb = siteLogo;
  try {
    const ctxJHG = require.context(
      "../../Assets/Projects/JHGuitarApp",
      false,
      /\.(png|jpe?g|webp)$/
    );
    jhgScreens = importAll(ctxJHG);
    const keysJHG = ctxJHG.keys();
    const thumbKeyJHG = keysJHG.find((k) => /thumbnail\.(png|jpe?g|webp)$/i.test(k));
    if (thumbKeyJHG) {
      jhgThumb = ctxJHG(thumbKeyJHG);
    } else if (jhgScreens.length > 0) {
      jhgThumb = jhgScreens[0];
    }
  } catch (e) {
    jhgScreens = [];
    jhgThumb = siteLogo;
  }

  const projects = useMemo(
    () => [
      {
        imgPath: crystaleThumb,
        title: "Crystale",
        description: (
          <>
            Led Crystale end-to-end from concept to production as Technical Lead, coordinating both game development and backend teams.
            <br />
            Implemented core gameplay systems in Unity and designed the multiplayer foundation using a client-server model powered by Colyseus, with an event-driven architecture on the Unity client.
            <br />
            Enforced server-authoritative gameplay logic to improve competitive integrity, synchronization consistency, and anti-cheat resilience.
            <br />
            Contributed to backend architecture and authentication workflows, including SSO-based login integration, and owned DevOps delivery by containerizing and deploying backend and multiplayer services.
          </>
        ),
        category: "Game",
        highlightTags: [
          "TECHNICAL LEAD",
          "CARD GAME",
          "ONLINE MULTIPLAYER",
          "EPIC STORE",
        ],
        techStack: [
          "Unity 3D",
          "C#",
          "Colyseus",
          "TypeScript",
          "Node.js",
          "JavaScript",
          "Socket.IO",
          "MongoDB",
          "Docker",
        ],
        links: [
          {
            label: "Epic Store",
            url: "https://store.epicgames.com/en-US/p/crystale-b4f9c3",
            type: "website",
          },
          {
            label: "Website",
            url: "https://www.crystale.io/game",
            type: "website",
          },
        ],
        screenshots: crystaleScreens,
        youtubeId: "Ml05Ys_mt0c",
      },
      {
        imgPath: gnomeThumb,
        title: "Gnome Wars",
        description: (
          <>
            Took over Gnome Wars from an initial MultiFPS asset base and led a deep rework of core gameplay and multiplayer architecture to make systems more scalable, maintainable, and content-ready.
            <br />
            Implemented core gameplay mechanics, player systems, and new game modes, including a King of the Hill mode inspired by Halo Infinite, while coordinating closely with animation and VFX pipelines for polished in-game integration. Built custom internal tooling, including a one-click Unity build generator for platform-specific outputs (Windows/Linux server and WebGL) with selective scene/script inclusion.
            <br />
            Designed and extended multiplayer synchronization using Mirror Networking, reverse-engineered and enhanced backend services, and built private lobby/matchmaking flows.
            <br />
            Contributed to a shared backend ecosystem across multiple games (APIs, sockets, economy, and friend systems), managed real-time profile systems with authentication support including SSO and wallet-based login.
            <br />
            Delivered DevOps workflows for WebGL, backend services, and headless Unity instances on VM infrastructure, plus a Python watchdog utility to recycle unused Unity instances and maintain server performance.
          </>
        ),
        category: "Game",
        highlightTags: [
          "TECHNICAL LEAD",
          "FPS",
          "MULTIPLAYER",
          "SHADER GRAPH",
          "ANIMATOR",
          "BATTLE ARENA",
          "LIVE OPS",
        ],
        techStack: [
          "Unity 3D",
          "C#",
          "Mirror Networking",
          ".NET",
          "Node.js",
          "JavaScript",
          "Socket.IO",
          "MongoDB",
          "Docker",
          "NGINX",
          "Python",
        ],
        links: [
          {
            label: "Website",
            url: "https://gnomewars.io/",
            type: "website",
          },
        ],
        screenshots: [gnomeThumb],
        youtubeId: "dVdwccxS02s",
      },
      {
        imgPath: britariaThumb,
        title: "Britaria (Legends Of Aria)",
        description: (
          <>
            Led the rebranding initiative from <b>Legends of Aria</b> to <b>Britaria</b>, managing a focused team of two developers while delivering core gameplay and technical upgrades for a live sandbox MMORPG ecosystem.
            <br />
            Worked deeply with the custom .NET-based <b>Shards Engine</b> architecture that powers large-scale multiplayer world instances, and implemented server-authoritative gameplay systems integrated with a Lua-based backend pipeline.
            <br />
            Delivered major optimization passes across graphics tiers (low/mid/high), including view-distance tuning, vegetation and terrain generation optimization, lighting and water improvements, VFX tuning, and texture-level performance balancing for broader hardware coverage.
            <br />
            Implemented and shipped key gameplay features such as custom character design workflows, land purchasing systems, horse ownership contracts, and a redesigned class-based skill tree to improve progression depth and player retention.
            <br />
            The work aligned with the title’s open-world, player-driven MMORPG foundations, where persistent-world systems, progression, and sandbox interactions are central to long-term engagement.
          </>
        ),
        category: "Game",
        highlightTags: [
          "TEAM LEAD",
          "MMORPG",
          "OPEN WORLD",
          "PERFORMANCE OPTIMIZATION",
          "SHARDS ENGINE",
          "LUA BACKEND",
          "DYNAMIC TERRAIN",
        ],
        techStack: [
          "Unity 3D",
          "C#",
          "Shards Engine",
          ".NET",
          "Lua Multiplayer Server",
          ".lua",
        ],
        links: [
          {
            label: "Website",
            url: "https://legendsofaria.com/",
            type: "website",
          },
          {
            label: "Steam Store",
            url: "https://store.steampowered.com/app/594770/Legends_of_Aria/",
            type: "website",
          },
        ],
        screenshots: britariaScreens,
        youtubeIds: ["os-wKHDheNM", "ipxSvu4-Fng", "QMqUJvnolM0"],
      },
      {
        imgPath: moonThumb,
        title: "MoonKarts",
        description: (
          <>
            Led MoonKarts as Team Lead, architecting core gameplay systems with an ECS-driven approach and delivering a high-fidelity kart racing experience focused on responsive handling and competitive feel.
            <br />
            Designed and implemented physics-intensive gameplay mechanics in Unity, including drift and kart control systems inspired by Mario Kart-style racing gameplay, with careful tuning for consistency and player mastery.
            <br />
            Built deterministic multiplayer gameplay using Photon Quantum, and leveraged deterministic replay workflows to improve anti-cheat trust by enabling verifiable match-state playback.
            <br />
            Co-led backend and platform integration with Splinterlands and Invennium to deliver Web3 systems, including NFT minting, staking/unstaking, burning, wallet management, and API integrations across centralized services and chain-facing endpoints.
            <br />
            Also oversaw off-chain data flows and service coordination to keep gameplay, economy, and wallet-linked user experiences stable across live environments.
          </>
        ),
        categories: ["Game", "Web"],
        highlightTags: [
          "TEAM LEAD",
          "KART RACING",
          "PLAY-TO-EARN",
          "DETERMINISTIC MULTIPLAYER",
          "SHADER GRAPH",
          "ANIMATOR",
          "WEB3",
          "NFT",
        ],
        techStack: [
          "Unity 3D",
          "C#",
          "Photon Quantum",
          "Node.js",
          "JavaScript",
          "Solidity",
        ],
        links: [
          {
            label: "Website",
            url: "https://moonkarts.arcadecolony.com/maintenance",
            type: "website",
          },
        ],
        screenshots: moonScreens,
        youtubeIds: ["lWxDUJ0rCV8", "gFMGj0n1M8g", "m50Kmf8qCzk"],
      },
      {
        imgPath: stakeThumb,
        title: "StakeHouse",
        description: (
          <>
            Led StakeHouse as Team Lead, architecting core gameplay systems and implementing production-ready casino game logic across poker, roulette, blackjack, and slot experiences.
            <br />
            Delivered dynamic UI systems that react in real time to on-chain and platform events, combining websocket streams, API-driven updates, and custom gameplay algorithms to keep game state, rewards, and economy data synchronized for players.
            <br />
            Co-led backend and platform integration with Splinterlands and Invennium to deliver Web3 capabilities, including NFT workflows (minting, staking/unstaking, and burning), wallet management, and integrations with centralized services plus chain-facing APIs.
            <br />
            Oversaw off-chain data orchestration and service coordination to maintain reliable gameplay, economy stability, and wallet-linked user journeys across live environments.
          </>
        ),
        categories: ["Game", "Web"],
        highlightTags: [
          "TEAM LEAD",
          "CASINO GAMES",
          "PLAY-TO-EARN",
          "WEB3",
          "NFT",
          "NON-CUSTODIAL WALLET",
        ],
        techStack: [
          "Unity 3D",
          "C#",
          "Node.js",
          "JavaScript",
          "WebSocket.IO",
        ],
        links: [
          {
            label: "Website",
            url: "https://stakehouseden.arcadecolony.com/maintenance",
            type: "website",
          },
        ],
        screenshots: stakeScreens,
        youtubeIds: ["wCyQGSiCstk", "oY9zheao31o"],
      },
      {
        imgPath: pfThumb,
        title: "PhotoFinish",
        description: (
          <>
            Contributed to the development of a live horse racing simulation game, focusing on backend stability and live operations.
            <br />
            Integrated and managed AWS services (DynamoDB, S3, Cognito) for secure player data handling and session management.
            <br />
            Designed and implemented event-driven systems, including sales, promotions, and seasonal content updates.
            <br />
            Supported real-time multiplayer systems, ensuring smooth synchronization and performance.
            <br />
            Maintained live game updates with minimal downtime, improving reliability and player experience.
            <br />
            Collaborated on monetization features, enhancing in-game purchases and revenue systems.
          </>
        ),
        categories: ["Game", "Apps"],
        highlightTags: [
          "LIVE OPS",
          "HORSE RACING",
          "BACKEND STABILITY",
          "AWS",
          "MONETIZATION",
        ],
        techStack: [
          "Unity 3D",
          "C#",
          "AWS DynamoDB",
          "AWS S3",
          "AWS Cognito",
          "Event-Driven Systems",
          "JSON",
        ],
        links: [
          {
            label: "App Store",
            url: "https://apps.apple.com/us/app/photo-finish-horse-racing/id993764346",
            type: "appstore",
          },
          {
            label: "Play Store",
            url: "https://play.google.com/store/apps/details?id=com.thirdtime.derbyking",
            type: "playstore",
          },
        ],
        screenshots: pfScreens,
        youtubeId: "M1EwfJSOci0",
      },
      {
        imgPath: hrmThumb,
        title: "HorseRacingManager2026",
        description: (
          <>
            Contributed to the development and live operation of a multiplayer horse racing title, with a primary focus on backend stability, production reliability, and release continuity.
            <br />
            Diagnosed and resolved critical AWS issues across DynamoDB, S3, and Cognito that impacted player data integrity and session management.
            <br />
            Implemented event-driven live-ops systems for sales, offers, and seasonal content through remote configuration workflows.
            <br />
            Supported monetization features by improving in-app purchase flows and promotional mechanics.
            <br />
            Strengthened production resilience by reducing live failures and enabling near zero-downtime content updates.
            <br />
            Collaborated closely with cross-functional teams to streamline live-ops deployment pipelines and maintain consistent delivery quality.
          </>
        ),
        categories: ["Game", "Apps"],
        highlightTags: [
          "HORSE RACING",
          "LIVE OPS",
          "AWS",
          "BACKEND STABILITY",
          "MONETIZATION",
          "EVENT-DRIVEN SYSTEMS",
        ],
        techStack: [
          "Unity 3D",
          "C#",
          "AWS DynamoDB",
          "AWS S3",
          "AWS Cognito",
          "Remote Config",
        ],
        links: [
          {
            label: "App Store",
            url: "https://apps.apple.com/us/app/horse-racing-manager-2026/id1275199710",
            type: "appstore",
          },
          {
            label: "Play Store",
            url: "https://play.google.com/store/apps/details?id=com.thirdtime.photofinishtwo&hl=en",
            type: "playstore",
          },
        ],
        screenshots: hrmScreens,
        youtubeId: "CgMpb12gr_8",
      },
      {
        imgPath: popThumb,
        title: "Pollen Pop",
        description: (
          <>
            Built Pollen Pop from the ground up for Honeyland using Unity, delivering a complete match-3 gameplay experience with progression systems designed for long-term engagement.
            <br />
            Developed competitive and social loops including leaderboards, tournaments, and reward-driven challenges, while integrating customization features to improve player retention and replayability.
            <br />
            Supported backend-connected game flows and live monetization systems (IAP and event-driven updates), and shipped a polished, production-ready mobile title aligned with Honeyland’s ecosystem goals.
          </>
        ),
        category: "Game",
        highlightTags: [
          "MATCH-3",
          "MULTIPLAYER",
          "LIVE OPS",
          "LEADERBOARDS",
          "TOURNAMENTS",
          "MONETIZATION",
          "IN-APPS",
          "WEB3",
          "HXD",
        ],
        techStack: [
          "Unity 3D",
          "C#",
          "Colyseus",
          "TypeScript",
          "Node.js",
          "JavaScript",
        ],
        contributions: [
          "Built Pollen Pop from the ground up for Honeyland using Unity.",
          "Implemented core match-3 gameplay systems and progression loops.",
          "Developed competitive/social features including leaderboards, tournaments, and rewards.",
          "Integrated customization and engagement systems for retention and replayability.",
          "Supported backend-connected flows and monetization features (IAP/live events) for live operations.",
          "Delivered a polished, production-ready mobile experience aligned with Honeyland ecosystem goals.",
        ],
        links: [
          {
            label: "Play Store",
            url: "https://play.google.com/store/apps/details?id=hexagon.pollenpop.game",
            type: "playstore",
          },
        ],
        screenshots: popScreens,
      },
      {
        imgPath: wbThumb,
        title: "Word Buzzle",
        description: (
          <>
            Built Word Buzzle from the ground up for Honeyland, delivering end-to-end game development across core gameplay systems and platform-connected features using Unity. The game supports both casual and competitive play with dual modes (<b>Play for Fun</b> and <b>Play for Rewards</b>), global leaderboards, and daily tournaments that drive progression and retention.
            <br />
            Added customization systems and social interactions that let players personalize gameplay, challenge friends, and share hints while improving vocabulary through engaging puzzle mechanics.
            <br />
            Contributed to backend development and implemented Web3 wallet integration workflows while building multiplayer server capabilities using Colyseus to support synchronized, scalable real-time gameplay features.
            <br />
            As part of the Honeyland ecosystem, the project balances competition, social play, and polished mobile UX for a feature-rich production experience.
          </>
        ),
        category: "Game",
        highlightTags: [
          "WORD PUZZLE",
          "MULTIPLAYER",
          "LEADERBOARDS",
          "TOURNAMENTS",
          "MONETIZATION",
          "LIVE OPS",
          "SOCIAL FEATURES",
          "WEB3",
          "HXD",
        ],
        techStack: [
          "Unity 3D",
          "C#",
          "Node.js",
          "JavaScript",
          "Colyseus",
          "TypeScript",
        ],
        links: [
          {
            label: "Play Store",
            url: "https://play.google.com/store/apps/details?id=com.honeyland.wordbuzzle",
            type: "playstore",
          },
        ],
        screenshots: wbScreens,
      },
      {
        imgPath: murlanThumb,
        title: "MurlanPro",
        description: (
          <>
            Took over MurlanPro as a solo developer while the title was already live in production. Re-architected a highly unstable multiplayer implementation built on Firebase Realtime Database, resolved critical sync and reliability issues, and delivered a seamless real-time gameplay experience.
            <br />
            <br />
            Implemented live chat and emoji communication systems, expanded game logic with advanced rules and gameplay mechanics, and built a private lobby system for controlled multiplayer sessions.
            <br />
            <br />
            Also handled live-ops responsibilities to ensure smooth ongoing updates and stable player-facing operations.
          </>
        ),
        categories: ["Game", "Apps"],
        highlightTags: [
          "SOLO DEVELOPER",
          "LIVE OPS",
          "REAL-TIME MULTIPLAYER",
          "FIREBASE",
        ],
        techStack: ["Unity 3D", "C#", "Firebase Realtime Database"],
        links: [
          {
            label: "Play Store",
            url: "https://play.google.com/store/apps/details?id=com.gaminations.murlan",
            type: "playstore",
          },
          {
            label: "App Store",
            url: "https://apps.apple.com/pk/app/murlan-pro/id1518649663",
            type: "appstore",
          },
        ],
        screenshots: murlanScreens,
        youtubeId: "gMyCqSO5w6c",
      },
      {
        imgPath: pbcThumb,
        title: "PsykineticBattleChess",
        description: (
          <>
            Collaborated with the Psykinetic team as a Unity developer to stabilize and enhance gameplay by implementing missing chess rules and resolving core gameplay bugs.
            <br />
            <br />
            Integrated and customized Cinemachine to deliver cinematic piece movement and capture-focused “kill shot” moments by extending existing Cinemachine scripts.
            <br />
            <br />
            Built an event-driven camera orchestration layer that triggers behavior on camera transitions and virtual camera states for smoother, more dynamic presentation.
            <br />
            <br />
            Also integrated the Psykinetic API to support accessible input controls designed for players with physical disabilities.
          </>
        ),
        categories: ["Game"],
        highlightTags: [
          "UNITY DEVELOPMENT",
          "CHESS RULES",
          "CINEMATIC CAMERA SYSTEMS",
          "SHADER GRAPH",
          "ANIMATOR",
          "EVENT-DRIVEN ARCHITECTURE",
        ],
        techStack: ["Unity 3D", "C#", "Cinemachine", "Shader Graph", "Blend Tree"],
        screenshots: pbcScreens,
        youtubeId: "xgLa_FtQoPw",
      },
      {
        imgPath: pzThumb,
        title: "PhonicZoom",
        description: (
          <>
            Led the development of PhonicZoom as an educational phonics and spelling platform for children, guiding gameplay delivery and API integrations across the app experience.
            <br />
            <br />
            Worked closely with backend engineering (PHP) to build and integrate core services and a web-based admin panel for content and learning management.
            <br />
            <br />
            The product combines 30+ learning games, customizable student profiles, progression journeys, and school-friendly reporting to support both classroom and at-home use.
            <br />
            <br />
            Also contributed to systems that support flexible spelling/phonics lists, differentiated difficulty, and scalable content updates aligned with school phonics schemes.
          </>
        ),
        categories: ["Game", "Web"],
        highlightTags: [
          "TEAM LEAD",
          "EDTECH",
          "PHONICS & SPELLING",
          "KIDS LEARNING GAMES",
          "WEB ADMIN PANEL",
          "BACKEND INTEGRATION",
        ],
        techStack: ["Unity 3D", "C#", "PHP", "REST APIs"],
        links: [
          {
            label: "Website",
            url: "https://www.phoniczoom.com/",
            type: "website",
          },
          {
            label: "Play Store",
            url: "https://play.google.com/store/apps/details?id=com.phoniczoom.spelling.games&hl=en",
            type: "playstore",
          },
        ],
        screenshots: pzScreens,
        youtubeId: "6qrs2ubuZkE",
      },
      {
        imgPath: tmThumb,
        title: "TriviaMix",
        description: (
          <>
            Led TriviaMix as a solo developer and built the product end-to-end from scratch, with a strong focus on gameplay flow and high-performance UI for a quiz-first experience.
            <br />
            <br />
            Since the app relies heavily on large, dynamic interface states, I extended Unity UI systems and selectively customized underlying UI behavior to support smooth long-scroll interactions and eliminate jitter.
            <br />
            <br />
            Integrated backend APIs and modeled JSON data into optimized in-app structures for scalable content delivery across multiple quiz formats.
            <br />
            <br />
            Implemented real-time websocket handling in Unity to drive timer-based content refresh cycles and keep question sets synchronized with live hourly updates.
          </>
        ),
        categories: ["Apps"],
        highlightTags: [
          "SOLO DEVELOPER",
          "TRIVIA GAME",
          "REAL-TIME QUIZZES",
          "UI OPTIMIZATION",
          "API INTEGRATION",
          "WEBSOCKETS",
        ],
        techStack: ["Unity 3D", "C#", "WebSockets", "JSON"],
        links: [
          {
            label: "Play Store",
            url: "https://play.google.com/store/apps/details?id=com.owlgames.triviamix&hl=en",
            type: "playstore",
          },
        ],
        screenshots: tmScreens,
        youtubeIds: ["eInE9kATx_E", "6Dxx9QLfCkw"],
      },
      {
        imgPath: eaThumb,
        title: "EnAbleAll",
        description: (
          <>
            Built EnAbleAll as a cross-platform app experience using React Native, with Expo used for testing and deployment workflows. Implemented both frontend and backend systems, with backend services developed in Node.js.
            <br />
            <br />
            The platform is centered around sustainability-focused missions and reward mechanics, enabling users to complete real-world actions and progress through quest-based engagement loops.
            <br />
            <br />
            Also supported app + web ecosystem delivery so campaign experiences, rewards, and partner-driven flows remain consistent across live environments.
          </>
        ),
        categories: ["Apps", "Web"],
        highlightTags: [
          "FULL-STACK DEVELOPMENT",
          "SUSTAINABILITY",
          "MISSIONS & QUESTS",
          "REWARDS PLATFORM",
          "GAMIFICATION",
        ],
        techStack: ["React Native", "Expo", "JavaScript", "Node.js", "REST APIs"],
        links: [
          {
            label: "App Store",
            url: "https://apps.apple.com/us/app/enable-all/id6670621607",
            type: "appstore",
          },
          {
            label: "Website",
            url: "https://www.enableallgame.com/",
            type: "website",
          },
        ],
        screenshots: eaScreens,
      },
      {
        imgPath: escThumb,
        title: "EscobaHD",
        description: (
          <>
            Built EscobaHD gameplay systems from scratch, implementing core Escoba rules and match flow for both single-player and multiplayer experiences.
            <br />
            <br />
            Delivered smooth, high-quality card gameplay with strong UX focus, including support for online/offline play patterns and polished visual presentation.
            <br />
            <br />
            Implemented platform-native light/dark mode behavior across Android and iOS so the game theme follows operating system appearance settings seamlessly.
            <br />
            <br />
            Also contributed to ongoing stability and release quality for live users.
          </>
        ),
        categories: ["Apps", "Game"],
        highlightTags: [
          "CARD GAME LOGIC",
          "OFFLINE + ONLINE",
          "DARK MODE",
          "CROSS-PLATFORM",
          "LIVE MAINTENANCE",
        ],
        techStack: ["Unity 3D", "C#", "Android Native", "iOS Native"],
        links: [
          {
            label: "Play Store",
            url: "http://play.google.com/store/apps/details?id=com.fabware.escoba",
            type: "playstore",
          },
          {
            label: "App Store",
            url: "https://apps.apple.com/us/app/escoba-hd/id543137173",
            type: "appstore",
          },
          {
            label: "Website",
            url: "https://www.escobahd.com/",
            type: "website",
          },
        ],
        screenshots: escScreens,
        youtubeId: "xanAyHSBmnA",
      },
      {
        imgPath: jhgThumb,
        title: "JHGuitarApp",
        description: (
          <>
            Built the JHGuitar app experience from scratch, combining multiple guitar training tools into a unified mobile platform for practice and skill development.
            <br />
            <br />
            Researched practical musical workflows to design and implement core features including metronome, tuner, fretboard trainer, looper, drills, and guided guitar training modules.
            <br />
            <br />
            To ensure reliable low-latency audio behavior, implemented threaded audio handling in Unity that interfaces with on-device sound-card execution paths rather than relying only on Unity’s main update loop.
            <br />
            <br />
            Contributed to a performance-focused architecture that supports consistent tool responsiveness across diverse practice scenarios.
          </>
        ),
        categories: ["Apps"],
        highlightTags: [
          "MUSIC TECH",
          "AUDIO ENGINEERING",
          "LOW-LATENCY AUDIO",
          "GUITAR TRAINING TOOLS",
          "PERFORMANCE OPTIMIZATION",
        ],
        techStack: [
          "Unity 3D",
          "C#",
          "Threaded Audio Processing",
          "Native Audio / Sound Card Integration",
        ],
        links: [
          {
            label: "Website",
            url: "https://www.jamieharrisonguitar.com/all-jhg-apps/",
            type: "website",
          },
        ],
        screenshots: jhgScreens,
        youtubeId: "JbVoWdtGgso",
      },
    ],
    []
  );

  const categories = ["All", "Game", "Web", "Apps"];

  const filtered = useMemo(() => {
    if (activeKey === "All") return projects;
    return projects.filter((p) => {
      if (Array.isArray(p.categories)) {
        return p.categories.includes(activeKey);
      }
      return p.category === activeKey;
    });
  }, [activeKey, projects]);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <div style={{ marginBottom: "20px" }}>
          <Tabs
            id="project-category-tabs"
            activeKey={activeKey}
            onSelect={(k) => setActiveKey(k || "All")}
            className="project-category-tabs mb-3 justify-content-center"
            justify
          >
            {categories.map((cat) => (
              <Tab eventKey={cat} title={cat} key={cat} />
            ))}
          </Tabs>
        </div>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filtered.length === 0 && (
            <Col md={12} style={{ color: "white", textAlign: "center", padding: "40px 0" }}>
              No projects in this category yet.
            </Col>
          )}
          {filtered.map((proj, idx) => (
            <Col md={4} className="project-card" key={`${proj.title}-${idx}`}>
              <ProjectCard
                imgPath={proj.imgPath}
                title={proj.title}
                description={proj.description}
                highlightTags={proj.highlightTags}
                techStack={proj.techStack}
                links={proj.links}
                videoSrc={proj.videoSrc}
                youtubeId={proj.youtubeId}
                youtubeIds={proj.youtubeIds}
                screenshots={proj.screenshots}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
