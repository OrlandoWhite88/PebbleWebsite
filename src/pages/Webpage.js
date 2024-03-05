import { useCallback } from "react";
import styles from "./Webpage.module.css";

const Webpage = () => {
  const onButtonContainerClick = useCallback(() => {
    window.location.href = "https://example.com";
  }, []);

  const onButtonContainer2Click = useCallback(() => {
    window.open("https://example.com");
  }, []);

  return (
    <div className={styles.webpage}>
      <div className={styles.headerParent}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <img
              className={styles.removal2Icon}
              alt=""
              src="/removal-2@2x.png"
            />
            <b className={styles.pebble}>Pebble</b>
          </div>
          <div className={styles.button} onClick={onButtonContainerClick}>
            <div className={styles.getEarlyAccess}>Get Early Access</div>
          </div>
        </div>
        <div className={styles.heroSectionParent}>
          <div className={styles.heroSection}>
            <div className={styles.heading}>
              <div className={styles.pebbleGpuCloud}>
                Pebble GPU Cloud. Connecting Underutilised Computers.
              </div>
            </div>
            <div className={styles.text}>
              <div className={styles.environmentallyResourcefulUsContainer}>
                <p className={styles.environmentallyResourcefulUs}>
                  Environmentally resourceful using underutilised compute
                  resources from around the world.
                </p>
                <p className={styles.environmentallyResourcefulUs}>
                  3-5x Cheaper Than Big Tech
                </p>
              </div>
            </div>
            <div className={styles.divbuttonContainer}>
              <div className={styles.btnOutline}>
                <div className={styles.logo}>
                  <div className={styles.pmuitypographyRoot}>
                    <div className={styles.viewDocs}>View Docs</div>
                  </div>
                </div>
                <div className={styles.divmuiboxRoot} />
                <div className={styles.pmuitypographyRoot}>
                  <div className={styles.viewDocs}>QuickStart Guide</div>
                </div>
              </div>
              <div className={styles.button1} onClick={onButtonContainer2Click}>
                <div className={styles.getEarlyAccess}>Get Early Access</div>
              </div>
            </div>
          </div>
          <div className={styles.images}>
            <img
              className={styles.a100pcxcbxcvbieTop21Icon}
              alt=""
              src="/a100pcxcbxcvbie-top2-1@2x.png"
            />
            <img
              className={styles.a100pcxcbxcvbieTop22Icon}
              alt=""
              src="/a100pcxcbxcvbie-top2-1@2x.png"
            />
            <img
              className={styles.a100pcxcbxcvbieTop23Icon}
              alt=""
              src="/a100pcxcbxcvbie-top2-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webpage;
