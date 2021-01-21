import React from "react";

const GifSearch = props =>
      {
        state = { query: ""}

        handlegif = e =>
            {
              e.preventDefault();
              this.props.fetch(this.state.query)
            }

            return(
                    <div className="containerGif">
                      <form onSubmit={this.handlegif}>
                        <input type="text" value={this.state.query} onChange={e => this.setState({query: e.target.value})} />
                      </form>
                    </div>
                  )
      }
      export default GifSearch;
