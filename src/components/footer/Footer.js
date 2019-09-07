import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Footer.css";

const MAX_NUMBER_NEWS_PER_CATEGORY_IN_FOOTER = 2;
class Footer extends Component {
  state = {
    footerNews: []
  };
  async componentDidMount() {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/news?limit=${MAX_NUMBER_NEWS_PER_CATEGORY_IN_FOOTER}`
      );
      this.setState({
        footerNews: response.data
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { footerNews } = this.state;

    return (
      <footer className="kilimanjaro_area">
        {/* <!-- Top Footer Area Start --> */}
        <div className="foo_top_header_one section_padding_100_70">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="kilimanjaro_part">
                  <h5>About Us</h5>
                  <p>
                    news-portal is completely creative, clean & 100% responsive
                    website. It simulates a real news portal like CNN, BCC and
                    others.
                  </p>
                </div>

                <div className="kilimanjaro_part m-top-15">
                  <h5>Important Links</h5>
                  <ul className="kilimanjaro_links">
                    <li>
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/news/world">
                        World
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/news/entertainment">
                        Entertainment
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/author">
                        Authors
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="kilimanjaro_part">
                  <h5>Latest News</h5>

                  {footerNews.length > 0 &&
                    footerNews.map(item => {
                      return (
                        <Link
                          key={item.id}
                          to={`/news/${item.id}/${item.title}`}
                        >
                          <div className="kilimanjaro_blog_area">
                            <div className="kilimanjaro_thumb">
                              <img
                                className="img-fluid"
                                width={100}
                                height={100}
                                src={item.image}
                                alt={item.title}
                              />
                            </div>
                            <p>{item.title}</p>
                          </div>
                        </Link>
                      );
                    })}
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="kilimanjaro_part">
                  <h5>Contact us</h5>
                  <div className="kilimanjaro_single_contact_info">
                    <h5>Phone:</h5>
                    <p>
                      +255 789 54 50 40 <br /> +2255 766 90 94 00
                    </p>
                  </div>
                  <div className="kilimanjaro_single_contact_info">
                    <h5>Email:</h5>
                    <p>
                      support@news-portal.com <br /> nilanaarquitetura@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer Bottom Area Start --> */}
        <div className=" kilimanjaro_bottom_header_one section_padding_50 text-center">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p>
                  © All Rights Reserved by <b>Nilana Rocha</b> - Built with ♥ -
                  2019
                  <i className="fa fa-love"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
