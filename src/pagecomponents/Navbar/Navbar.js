import React from "react";
import "./Navbar.css";
import amazonlogo from "../../Assets/Amazon-logo.png";
import { Grid, GridColumn, Search } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div id="navbar">
      <div id="navbar-start">
        <div className="nav-item">
          <img src={amazonlogo} alt="home" id="home-logo" />
        </div>
      </div>
      <div id="navbar-middle">
        <div className="nav-item">
          <Grid>
            <GridColumn width={8}>
              <Search
                // loading={loading}
                placeholder="Search..."
                // onResultSelect={(e, data) =>
                //   dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
                // }
                // onSearchChange={handleSearchChange}
                // results={results}
                // value={value}
              />
            </GridColumn>

            {/* <GridColumn width={10}>
              <Segment>
                <Header>State</Header>
                <pre style={{ overflowX: "auto" }}>
                  {JSON.stringify({ loading, results, value }, null, 2)}
                </pre>
                <Header>Options</Header>
                <pre style={{ overflowX: "auto" }}>
                  {JSON.stringify(source, null, 2)}
                </pre>
              </Segment>
            </GridColumn> */}
          </Grid>
        </div>
      </div>
      <div id="navbar-end">
        <Link className="nav-item" to={"/login"}>
          Login
        </Link>
        <Link className="nav-item" to={"/signup"}>
          signup
        </Link>
        <Link className="nav-item" to={"/cart"}>
          cart
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
