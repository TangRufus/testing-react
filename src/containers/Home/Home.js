import React from 'react';
import { Hero } from 'components';
import Helmet from 'react-helmet';

function Home() {
  return (
    <div>
      <Helmet title="Home" />

      <Hero title="伯樂" />

      <div className="container">
        <h2 className="section-title">Description</h2>

        <div className="row">
          <div className="col-md-6">
            <h5>Easy to integrate</h5>
            <p>
              Creative Tim stands for everything a designer looks in his work: clean, functions interfaces for great products. The number of friends with similar attitude can only increase over time, since the vision for a better web is a wish of many designers. </p>
            <p>Be sure to enroll and browse around for anything that may bring extra value to your project and ask Tim wherever you see something missing. </p>

          </div>
          <div className="col-md-6">
            <div iddd="description-carousel" className="carousel fade" data-ride="carousel">
              <div className="carousel-inner">
                <div className="item active">
                  <img src="http://localhost:3000/assets/img/thumb.jpg" alt="..." />
                </div>
                <div className="item">
                  <img src="http://localhost:3000/assets/img/thumb.jpg" alt="..." />
                </div>
                <div className="item">
                  <img src="http://localhost:3000/assets/img/thumb.jpg" alt="..." />
                </div>
              </div>

              <ol className="carousel-indicators">
                <li data-target="#description-carousel" data-slide-to="0" className="active"></li>
                <li data-target="#description-carousel" data-slide-to="1"></li>
                <li data-target="#description-carousel" data-slide-to="2"></li>
              </ol>
            </div>
          </div>
        </div>

        <div className="space-50"></div>
        <hr />
        <div className="space-50"></div>

        <div className="row">
          <div className="col-md-6">
            <div className="img-container">
              <img src="http://localhost:3000/assets/img/thumb.jpg" alt="..." />
            </div>
          </div>
          <div className="col-md-6">
            <h5>Fast Development</h5>
            <p>
              Creative Tim stands for everything a designer looks in his work: clean, functions interfaces for great products. The number of friends with similar attitude can only increase over time, since the vision for a better web is a wish of many designers. </p>
            <p>Be sure to enroll and browse around for anything that may bring extra value to your project and ask Tim wherever you see something missing. </p>

          </div>
        </div>
      </div>
      <div className="space-50"></div>

      <div className="section section-features-1">
        <div className="container">
          <h2 className="section-title">Features <small>(example 1)</small></h2>
          <div className="row">
            <div className="col-md-4">
              <div className="info">
                <div className="icon">
                  <i className="pe-7s-clock"></i>
                </div>
                <div className="description">
                  <h5> Save Time </h5>
                  <p className="text-muted">Spend your time generating new ideas. You don't have to think of implementing anymore.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info">
                <div className="icon">
                  <i className="pe-7s-scissors"></i>
                </div>
                <div className="description">
                  <h5> Fast Prototyping </h5>
                  <p className="text-muted">Create hundreds of items combinations within seconds and present them to your client.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info">
                <div className="icon">
                  <i className="pe-7s-science"></i>
                </div>
                <div className="description">
                  <h5> Unleash Creativity </h5>
                  <p className="text-muted">The large amount of components with the color variations will make you create an amazing web design.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section-features-2">
        <div className="container">
          <h2 className="section-title">Features <small>(example 2)</small></h2>
          <div className="row">
            <div className="col-md-4">
              <div className="info">
                <div className="icon icon-azure">
                  <i className="pe-7s-clock"></i>
                </div>
                <div className="description">
                  <h5> Save Time </h5>
                  <p className="text-muted">Spend your time generating new ideas. You don't have to think of implementing anymore.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info">
                <div className="icon icon-orange">
                  <i className="pe-7s-scissors"></i>
                </div>
                <div className="description">
                  <h5> Fast Prototyping </h5>
                  <p className="text-muted">Create hundreds of items
                    combinations within seconds and present them to your client.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info">
                <div className="icon icon-purple">
                  <i className="pe-7s-science"></i>
                </div>
                <div className="description">
                  <h5> Unleash Creativity </h5>
                  <p className="text-muted">
                    The large amount of components with the color variations will make
                    you create an amazing web design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section-gray">
        <div className="container">
          <div className="big-info">
            <h3 className="text-center">Free trial. Cancel when you want. <br />
            <small>All plans include a 14-day free trial</small>
          </h3>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card card-price">
              <div className="content">
                <h6 className="category">Basic</h6>
                <h1 className="price">
                  <small>&euro;</small>29
                  </h1>
                  <ul className="list-unstyled list-lines">
                    <li>
                      <i className="fa fa-comments"></i> <b>10,000</b> Messages
                      </li>
                      <li>
                        <i className="fa fa-magic"></i> <b>500+</b> Elements
                        </li>
                        <li>
                          <i className="fa fa-male"></i> <b>250</b> Users
                          </li>
                          <li>
                            <i className="fa fa-level-up"></i> <b>Free</b> Updates
                            </li>
                          </ul>
                        </div>
                        <div className="footer">
                          <button type="button" className="btn btn-info btn-round btn-block">
                            Buy now!
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card card-price card-price-best-deal">
                        <div className="content">
                          <h6 className="category">Premium</h6>
                          <h1 className="price">
                            <small>&euro;</small>69
                            </h1>
                            <ul className="list-unstyled list-lines">
                              <li>
                                <i className="fa fa-comments"></i> <b>Unlimited</b> Messages
                                </li>
                                <li>
                                  <i className="fa fa-magic"></i> <b>Unlimited</b> Elements
                                  </li>
                                  <li>
                                    <i className="fa fa-male"></i> <b>Unlimited</b> Users
                                    </li>
                                    <li>
                                      <i className="fa fa-dollar"></i> <b>Best Price</b> Deal
                                      </li>
                                      <li>
                                        <i className="fa fa-level-up"></i> <b>Free</b> Updates
                                        </li>
                                        <li>
                                          <i className="fa fa-phone"></i> <b>Premium</b> Support
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="footer">
                                        <button type="button" className="btn btn-info btn-round btn-fill btn-block">Buy now!</button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="card card-price">
                                      <div className="content">
                                        <h6 className="category">Standard</h6>
                                        <h1 className="price">
                                          <small>&euro;</small>49
                                          </h1>
                                          <ul className="list-unstyled list-lines">
                                            <li>
                                              <i className="fa fa-comments"></i>
                                              <b>5,000</b> Messages
                                              </li>
                                              <li>
                                                <i className="fa fa-magic"></i>
                                                <b>700+</b> Elements
                                                </li>
                                                <li>
                                                  <i className="fa fa-male"></i> <b>200</b> Users
                                                  </li>
                                                  <li>
                                                    <i className="fa fa-level-up"></i>
                                                    <b>Free</b> Updates
                                                    </li>
                                                  </ul>
                                                </div>
                                                <div className="footer">
                                                  <button type="button" className="btn btn-info btn-round btn-block">
                                                    Buy now!</button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="section section-testimonials">
                                        <div className="container">
                                          <h2 className="section-title">What people think...</h2>
                                          <div iddd="testimonials-carousel" className="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner">
                                              <div className="item active">
                                                <div className="row">
                                                  <div className="col-md-6">
                                                    <div className="card card-plain">
                                                      <div className="content">
                                                        <a target="_blank" href="http://www.creative-tim.com/product/get-shit-done-pro">
                                                          <h4 className="title">I've bought it, and I have to say that it's simply awesome. Creative Tim creates awesome looking templates! :)</h4>
                                                        </a>
                                                        <div className="footer">
                                                          <div className="author">
                                                            <a className="card-link" href="#">
                                                              <img src="http://localhost:3000/assets/img/default-avatar.png" alt="..." className="avatar" />
                                                              <span> Radu Tintescu </span>
                                                            </a>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-6">
                                                    <div className="card card-plain">
                                                      <div className="content">
                                                        <h4 className="title">If you like elegant web design, really check out this
                                                          <a target="_blank" href="http://gsdk.creative-tim.com/">link</a>.
                                                            It has just about everything you might need and looks great.
                                                          </h4>

                                                          <div className="footer">
                                                            <div className="author">
                                                              <a className="card-link" target="_blank" href="https://twitter.com/tudorvintilescu">
                                                                <img src="http://localhost:3000/assets/img/default-avatar.png" alt="..." className="avatar" />
                                                                <span> Alex Paduraru </span>
                                                              </a>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="item">
                                                  <div className="row">
                                                    <div className="col-md-6">
                                                      <div className="card card-plain">
                                                        <div className="content">
                                                          <a target="_blank" href="">
                                                            <h4 className="title">Loved the reusable elements in the 'Get Shit Done Kit'? The PRO version will blow your mind. </h4>
                                                          </a>
                                                          <div className="footer">
                                                            <div className="author">
                                                              <a className="card-link" target="_blank" href="http://www.awwwards.com/">
                                                                <img src="http://localhost:3000/assets/img/default-avatar.png" alt="..." className="avatar" />
                                                                <span> Conacel Elena </span>
                                                              </a>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                      <div className="card card-plain">
                                                        <div className="content">
                                                          <a target="_blank" href="http://www.creative-tim.com/product/get-shit-done-pro">
                                                            <h4 className="title">I've bought it, and I have to say that it's simply awesome. Creative Tim creates awesome looking templates! :)</h4>
                                                          </a>
                                                          <div className="footer">
                                                            <div className="author">
                                                              <a className="card-link" target="_blank" href="#">
                                                                <img src="http://localhost:3000/assets/img/default-avatar.png" alt="..." className="avatar" />
                                                                <span> Jay Z </span>
                                                              </a>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>

                                                  </div>
                                                </div>
                                              </div>

                                              <a className="left carousel-control" href="#testimonials-carousel" data-slide="prev">
                                                <span className="fa fa-angle-left"></span>
                                              </a>
                                              <a className="right carousel-control" href="#testimonials-carousel" data-slide="next">
                                                <span className="fa fa-angle-right"></span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="section section-gray section-clients">
                                          <div className="container">
                                            <h2 className="section-title">Our Clients</h2>
                                            <div className="clients-presentation">
                                              <div className="row">
                                                <div className="col-md-3">
                                                  <div className="info">
                                                    <div className="icon">
                                                      <i className="fa fa-apple"></i>
                                                    </div>
                                                    <div className="description">
                                                      <h3> Apple </h3>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-md-3">
                                                  <div className="info">
                                                    <div className="icon">
                                                      <i className="fa fa-windows"></i>
                                                    </div>
                                                    <div className="description">
                                                      <h3> Microsoft </h3>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-md-3">
                                                  <div className="info">
                                                    <div className="icon">
                                                      <i className="fa fa-yelp"></i>
                                                    </div>
                                                    <div className="description">
                                                      <h3> Yelp </h3>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-md-3">
                                                  <div className="info">
                                                    <div className="icon">
                                                      <i className="fa fa-dropbox"></i>
                                                    </div>
                                                    <div className="description">
                                                      <h3> Dropbox </h3>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
  );
}

export default Home;
