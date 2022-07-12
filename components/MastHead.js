import React from "react";
import { useRouter } from "next/router";
import es from "../locales/es-ES/common.json";
import en from "../locales/en-US/common.json";
function MastHead({ mastheadText, mastheadTitle }) {
  return (
    <div className="masthead">
      <div className="container-fluid ">
        <div className="masthead-header text-start">
          <h2 className="fst-italic mt-2 px-2 lh-1 mb-4 lh-sm text-white text-break">
            {mastheadTitle}
          </h2>
          <p className="mb-5 px-2 text-wrap">{mastheadText}</p>
        </div>
      </div>
    </div>
  );
}

export default MastHead;
