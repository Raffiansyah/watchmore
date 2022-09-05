import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiConfig from "../../Api/apiConfig";
import { category } from "../../Api/category";

function DetailInfo() {
  const params = useParams();
  const [credit, setCredit] = useState([]);

  useEffect(
    function () {
      async function getCredits() {
        const request = await fetch(
          `${apiConfig.baseUrl}${category.movie}${params.id}/credits?${apiConfig.apiKey}`
        );
        const response = await request.json();
        const credit = response.cast.slice(0, 5);

        setCredit(credit);
      }
      getCredits();
    },
    [params]
  );
  return (
    <div className="row justify-content-around align-items-center">
      <h1>Cast</h1>
      {credit.map(function (credits, index) {
        return (
          <div className="col-xl-1 col-lg-2 col-md-4 col-xs-6" key={index}>
            <img
              src={`${apiConfig.w500Img}${credits.profile_path}`}
              alt={credits.original_name}
              className="img-cast rounded-3"
            />
            <p>{credits.original_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DetailInfo;
