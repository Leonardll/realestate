import React from "react";
import useTranslation from "next-translate/useTranslation";

function MastHead() {
  let { t } = useTranslation();

  return (
    <div className="masthead">
      <div className="container-fluid ">
        <div className="masthead-header text-start">
          <h2 className="fst-italic mt-2 px-2 lh-1 mb-4 lh-sm text-white text-break">
            {t("common:mastheadTitle")}
          </h2>
          <p className="mb-5 px-2 text-wrap">{t("common:mastheadText")}</p>
        </div>
      </div>
    </div>
  );
}

export default MastHead;
