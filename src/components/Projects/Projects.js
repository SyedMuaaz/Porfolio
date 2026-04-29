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
        description:
          "A fast-paced experience featuring crystal-themed mechanics and visual effects. More details coming soon.",
        category: "Game",
        screenshots: crystaleScreens,
        youtubeId: "Ml05Ys_mt0c",
      },
      {
        imgPath: gnomeThumb,
        title: "Gnome Wars",
        description:
          "Arcade shooter featuring gnome characters and fast-paced action. Trailer and gameplay showcase available.",
        category: "Game",
        screenshots: [gnomeThumb],
        youtubeId: "dVdwccxS02s",
      },
      {
        imgPath: britariaThumb,
        title: "Britaria (Legends Of Aria)",
        description:
          "MMO sandbox project entry. Media links provided; details to follow.",
        category: "Game",
        screenshots: britariaScreens,
        youtubeIds: ["os-wKHDheNM", "ipxSvu4-Fng", "QMqUJvnolM0"],
      },
      {
        imgPath: moonThumb,
        title: "MoonKarts",
        description: (
          <>
            Kart racing project with moonlit tracks and arcade handling. Live site:{" "}
            <a
              href="https://moonkarts.qa1-goals.com/"
              target="_blank"
              rel="noreferrer"
            >
              moonkarts.qa1-goals.com
            </a>
            .
          </>
        ),
        categories: ["Game", "Web"],
        screenshots: moonScreens,
        youtubeIds: ["lWxDUJ0rCV8", "gFMGj0n1M8g", "m50Kmf8qCzk"],
      },
      {
        imgPath: stakeThumb,
        title: "StakeHouse",
        description: (
          <>
            Staking platform project. Live site:{" "}
            <a
              href="https://stakehouseden.arcadecolony.com/"
              target="_blank"
              rel="noreferrer"
            >
              stakehouseden.arcadecolony.com
            </a>
            .
          </>
        ),
        categories: ["Game", "Web"],
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
            <br />
            Integrated and managed AWS services (DynamoDB, S3, Cognito) for secure player data handling and session management.
            <br />
            <br />
            Designed and implemented event-driven systems, including sales, promotions, and seasonal content updates.
            <br />
            <br />
            Supported real-time multiplayer systems, ensuring smooth synchronization and performance.
            <br />
            <br />
            Maintained live game updates with minimal downtime, improving reliability and player experience.
            <br />
            <br />
            Collaborated on monetization features, enhancing in-game purchases and revenue systems.
            <br />
            <br />
            Play Store:&nbsp;
            <a
              href="https://play.google.com/store/apps/details?id=com.thirdtime.derbyking&hl=en-US"
              target="_blank"
              rel="noreferrer"
            >
              Photo Finish Horse Racing on Google Play
            </a>
          </>
        ),
        categories: ["Game", "Apps"],
        screenshots: pfScreens,
        youtubeId: "M1EwfJSOci0",
      },
      {
        imgPath: hrmThumb,
        title: "HorseRacingManager2026",
        description: (
          <>
            Contributed to a live multiplayer horse racing game, focusing on backend stability and live operations.
            <br />
            <br />
            Diagnosed and resolved critical AWS issues (DynamoDB, S3, Cognito) impacting player data and session management.
            <br />
            <br />
            Implemented and configured event-driven systems for sales, offers, and seasonal content via remote configuration.
            <br />
            <br />
            Supported monetization systems, improving in-game purchase flows, and promotional features.
            <br />
            <br />
            Enhanced system reliability and stability, reducing failures in live production environments.
            <br />
            <br />
            Enabled seamless live updates with minimal to zero downtime.
            <br />
            <br />
            Collaborated on live ops workflows to ensure smooth deployment of content and features.
            <br />
            <br />
            Play Store:&nbsp;
            <a
              href="https://play.google.com/store/search?q=Horse%20Racing%20Manager&c=apps"
              target="_blank"
              rel="noreferrer"
            >
              Horse Racing Manager on Google Play
            </a>
          </>
        ),
        categories: ["Game", "Apps"],
        screenshots: hrmScreens,
        youtubeId: "CgMpb12gr_8",
      },
      {
        imgPath: popThumb,
        title: "Pollen Pop",
        description: (
          <>
            Created Pollen Pop for Honeyland, developing the game from the ground up using Unity. This free-to-play multiplayer match-3 game offers an engaging experience filled with fun puzzles and exciting challenges that cater to both competitive and casual players.
            <br />
            <br />
            <b>Key Features:</b>
            <br />
            Competitive Leaderboards: Climb daily and monthly rankings to showcase your skills.
            <br />
            Rewards: Earn prizes in time-based challenges.
            <br />
            Daily Tournaments: Compete globally for valuable rewards.
            <br />
            Customization: Unlock themes and backgrounds for a personalized experience.
            <br />
            Social Play: Connect with friends via social media and challenge them to matches.
            <br />
            Ad-Free Experience: Enjoy pure gameplay without interruptions.
            <br />
            In-App Purchases: Enhance gameplay with power-ups and cosmetics.
            <br />
            <br />
            As part of the Honeyland gaming ecosystem, Pollen Pop blends social interaction with competitive mechanics, rewarding players for skillful gameplay and active participation. My work included creating the game’s core mechanics, and backend systems, ensuring a seamless player experience.
            <br />
            <br />
            By utilizing Unity I delivered a visually appealing and technically robust product that aligns with Honeyland’s vision for innovative and player-friendly games.
            <br />
            <br />
            Play Store:&nbsp;
            <a
              href="https://play.google.com/store/apps/details?id=hexagon.pollenpop.game"
              target="_blank"
              rel="noreferrer"
            >
              Pollen Pop on Google Play
            </a>
          </>
        ),
        category: "Game",
        screenshots: popScreens,
      },
      {
        imgPath: wbThumb,
        title: "Word Buzzle",
        description: (
          <>
            Developed Word Buzzle from the ground up for Honeyland, creating every aspect of the game, including frontend, backend, and core gameplay, using Unity as the primary development platform.
            <br />
            <br />
            This exciting word game features two main modes: <b>Play for Fun</b>, where players earn points and climb the global leaderboard, and <b>Play for Rewards</b>, which challenges players with time-based puzzles to win prizes. <b>Daily tournaments</b> enhance the competitive spirit, allowing players to compete globally for additional rewards.
            <br />
            <br />
            Word Buzzle also offers extensive customization options, enabling players to personalize their puzzle environment with unique themes and backgrounds. Social features enrich the experience, letting players connect with friends, challenge them to puzzles, and share hints—while expanding their vocabulary through engaging gameplay.
            <br />
            <br />
            As part of the Honeyland gaming ecosystem, Word Buzzle blends competitive gameplay with social interaction—delivering a seamless, visually captivating, and feature-rich gaming experience.
            <br />
            <br />
            Play Store:&nbsp;
            <a
              href="https://play.google.com/store/apps/details?id=com.honeyland.wordbuzzle"
              target="_blank"
              rel="noreferrer"
            >
              Word Buzzle on Google Play
            </a>
          </>
        ),
        category: "Game",
        screenshots: wbScreens,
      },
      {
        imgPath: murlanThumb,
        title: "MurlanPro",
        description: (
          <>
            Classic card game project entry. Play Store:&nbsp;
            <a
              href="https://play.google.com/store/apps/details?id=com.gaminations.murlan&hl=en"
              target="_blank"
              rel="noreferrer"
            >
              Murlan Pro on Google Play
            </a>
            .
          </>
        ),
        categories: ["Game", "Apps"],
        screenshots: murlanScreens,
        youtubeId: "gMyCqSO5w6c",
      },
      {
        imgPath: pbcThumb,
        title: "PsykineticBattleChess",
        description:
          "Experimental chess-inspired battle game prototype with psykinetic mechanics. Details to follow.",
        categories: ["Game"],
        screenshots: pbcScreens,
        youtubeId: "xgLa_FtQoPw",
      },
      {
        imgPath: pzThumb,
        title: "PhonicZoom",
        description: (
          <>
            Subscription-based phonics, spelling, and reading app with engaging games for children—covering major phonics schemes and customizable word lists.
            <br />
            <br />
            Website:&nbsp;
            <a href="https://www.phoniczoom.com/" target="_blank" rel="noreferrer">
              phoniczoom.com
            </a>
            &nbsp;|&nbsp; Play Store:&nbsp;
            <a
              href="https://play.google.com/store/apps/details?id=com.phoniczoom.spelling.games&hl=en"
              target="_blank"
              rel="noreferrer"
            >
              Phonic Zoom on Google Play
            </a>
            .
          </>
        ),
        categories: ["Game", "Web"],
        screenshots: pzScreens,
        youtubeId: "6qrs2ubuZkE",
      },
      {
        imgPath: tmThumb,
        title: "TriviaMix",
        description: (
          <>
            Hourly-refreshed quiz app across diverse topics with image-based and quick math challenges.
            <br />
            <br />
            Play Store:&nbsp;
            <a
              href="https://play.google.com/store/apps/details?id=com.owlgames.triviamix&hl=en"
              target="_blank"
              rel="noreferrer"
            >
              Trivia Mix on Google Play
            </a>
            .
          </>
        ),
        categories: ["Apps"],
        screenshots: tmScreens,
        youtubeIds: ["eInE9kATx_E", "6Dxx9QLfCkw"],
      },
      {
        imgPath: eaThumb,
        title: "EnAbleAll",
        description: (
          <>
            Sustainable missions and quests platform that rewards real-world actions with points and tokens across partners.
            <br />
            <br />
            App Store:&nbsp;
            <a
              href="https://apps.apple.com/us/app/enable-all/id6670621607"
              target="_blank"
              rel="noreferrer"
            >
              EnAble ALL on App Store
            </a>
            &nbsp;|&nbsp; Website:&nbsp;
            <a href="https://www.enableallgame.com/" target="_blank" rel="noreferrer">
              enableallgame.com
            </a>
            .
          </>
        ),
        categories: ["Apps", "Web"],
        screenshots: eaScreens,
      },
      {
        imgPath: escThumb,
        title: "EscobaHD",
        description: (
          <>
            Traditional Escoba card game with beautiful graphics, playable offline or online.
            <br />
            <br />
            Play Store:&nbsp;
            <a
              href="https://play.google.com/store/apps/details?id=com.fabware.escoba"
              target="_blank"
              rel="noreferrer"
            >
              Escoba HD on Google Play
            </a>
            .
          </>
        ),
        categories: ["Apps", "Game"],
        screenshots: escScreens,
        youtubeId: "xanAyHSBmnA",
      },
      {
        imgPath: jhgThumb,
        title: "JHGuitarApp",
        description: (
          <>
            The JHG Apps collection: a suite of guitar training tools (ear training, rhythm toolkit, drills, tuner, looper, backing tracks, and more).
            <br />
            <br />
            Website:&nbsp;
            <a
              href="https://www.jamieharrisonguitar.com/all-jhg-apps/"
              target="_blank"
              rel="noreferrer"
            >
              jamieharrisonguitar.com/all-jhg-apps
            </a>
            .
          </>
        ),
        categories: ["Apps"],
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
