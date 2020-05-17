import React from "react";
import { Grid, Cell } from "react-mdl";

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Grid className="landing-page">
          <Cell col={12}>
            <img
              src="https://lh3.googleusercontent.com/x-3SVWKKktWs2dfdYsc8q5-8jgw65TZ9jM6yYg9vah0a5c0XajHB5_4MIzGH_1oUW9Y0Z8gyr4Wve6i3kYxmHPzvHJASPewbrHC9iUf-P_AVbhXN0ZdXqmqsE4fQdJd6hqZIN-mL9oN5TlaFkiGGItpZoMQvYvg_P-PGP0bNrUl_iTAHe5muZ3hW3eCjej5dkLhnwgDHLnrABFeuE1BPUctDS0yWBAtSBIkTSsPkEA4TpVS3pkgWXtMCPE8Ow6Wv03iD-i_bpBr5Aj1dIZtKLXZCPT967PO6LlyCFGuvouo8lR_oYr7xpUNcweGYapiLdDx7KOTlyA3sdaGbX0TY--06k7C9OY4eqvHDyS32O6k_gSrn5pTFSnymt9_FcNBB0Ow-nDZ0nlHoC5x2iExTg4qE1NSgILGJwF1y4s4PeGCL8kzstuk5SSGvffncH_X5H3A2LeBlbsWPQD_4eElZ_vuez2RTY4F7SDb4HEupdxCmQWRf0dHCF3knExYXA7oG0c8bUlElD-_pA1aqWuZcBN2FfqGUMPx9jd5sTx2WjSrYu9ynOo03c4Frx1aHQQXkTetCUlAYPfHqe1WQOxNAS9m8Di_CS854zBcWw5nQuzZpYr9q3TxjVGByFWjcSzs77xf-kHBLrA3dbqxNJZ32TDOowUCxZS16P6S7BPQsWrfi4iwJF08v3DQf_9yajw=w793-h807-no"
              alt=""
              className="Image"
            />

            <div className="BannerText">
              <h1>Soumyakanta Boity </h1>
              <hr />
              <p>Java | Python | HTML | React JS </p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
