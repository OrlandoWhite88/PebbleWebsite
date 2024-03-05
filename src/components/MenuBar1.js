import styles from "./MenuBar1.module.css";

const MenuBar1 = () => {
  return (
    <div className={styles.menuBar}>
      <div className={styles.logo}>
        <img className={styles.logoDarkIcon} alt="" src="/logo-dark.svg" />
        <div className={styles.pebble}>Pebble</div>
      </div>
      <div className={styles.gpuCloudSection}>
        <div className={styles.heading}>
          <div className={styles.pebble}>GPU cloud</div>
        </div>
        <div className={styles.menuItemParent}>
          <div className={styles.menuItem}>
            <img className={styles.traningIcon} alt="" src="/traning.svg" />
            <div className={styles.training}>Training</div>
          </div>
          <div className={styles.menuItem1}>
            <img className={styles.traningIcon} alt="" src="/diployment.svg" />
            <div className={styles.training}>Deployment</div>
          </div>
          <div className={styles.menuItem1}>
            <img className={styles.traningIcon} alt="" src="/filesystem.svg" />
            <div className={styles.training}>File System</div>
          </div>
          <div className={styles.menuItem1}>
            <img className={styles.traningIcon} alt="" src="/api-key.svg" />
            <div className={styles.training}>API Keys</div>
          </div>
        </div>
      </div>
      <div className={styles.studioSection}>
        <div className={styles.heading}>
          <div className={styles.studio}>Studio</div>
        </div>
        <div className={styles.menuItemParent}>
          <div className={styles.menuItem1}>
            <img className={styles.traningIcon} alt="" src="/visual-code.svg" />
            <div className={styles.training}>VS Code Studio</div>
          </div>
          <div className={styles.menuItem1}>
            <img className={styles.traningIcon} alt="" src="/jupitor.svg" />
            <div className={styles.training}>Juypter Notebook</div>
          </div>
        </div>
      </div>
      <div className={styles.settingsSection}>
        <div className={styles.heading}>
          <div className={styles.studio}>Settings</div>
        </div>
        <div className={styles.menuItemParent}>
          <div className={styles.menuItem1}>
            <div className={styles.usage}>
              <img className={styles.icon} alt="" src="/icon.svg" />
            </div>
            <div className={styles.training}>Usage</div>
          </div>
          <div className={styles.menuItem1}>
            <img className={styles.traningIcon} alt="" src="/pricing.svg" />
            <div className={styles.training}>Pricing</div>
          </div>
          <div className={styles.menuItem1}>
            <img className={styles.traningIcon} alt="" src="/docs.svg" />
            <div className={styles.training}>Docs</div>
          </div>
          <div className={styles.menuItem1}>
            <img className={styles.traningIcon} alt="" src="/settings.svg" />
            <div className={styles.training}>Settings</div>
          </div>
        </div>
      </div>
      <div className={styles.iconchevronsLeftWrapper}>
        <img
          className={styles.traningIcon}
          alt=""
          src="/iconchevronsleft.svg"
        />
      </div>
    </div>
  );
};

export default MenuBar1;
