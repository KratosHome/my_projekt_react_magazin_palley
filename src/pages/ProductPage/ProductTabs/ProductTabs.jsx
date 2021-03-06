import React, { useState } from "react";
import "./ProductTabs.css";
import Grade from "../../../components/UL/Grade/Grade";
import WriteReview from "../WriteReview/WriteReview";
import { CSSTransition } from "react-transition-group";

const ProductTabs = ({
  discription,
  brand,
  productDiteils,
  sizeFit,
  aboutMe,
  img,
  review,
}) => {


  const [reviews, setRewise] = React.useState(review)



  const [post, setPost] = React.useState({
    grade: 3,
    email: "",
    name: "",
    text: ""
  })


  const sentReview = (e) => {
    e.preventDefault()
    setRewise([...review, { ...post, id: Date.now() }])
    setPost({
      grade: 3,
      email: "",
      name: "",
      text: ""
    })
  }


  const [tab, setTab] = useState(1);
  const [inimateRewise, seAnimeatetRewise] = useState(false);

  return (
    <>
      <div>
        <div className="ProductTabsContainer">
          <div
            className={tab === 1 ? "ProductTabsH1Activ" : "ProductTabsH1"}
            onClick={() => setTab(1)}
          >
            DESCRIPTION
          </div>
          <div
            className={tab === 2 ? "ProductTabsH1Activ" : "ProductTabsH1"}
            onClick={() => setTab(2)}
          >
            ADDITIONAL INFORMATION
          </div>

          <div
            className={tab === 3 ? "ProductTabsH1Activ" : "ProductTabsH1"}
            onClick={() => setTab(3)}
          >
            REVIEW
          </div>
        </div>
        <CSSTransition in={tab === 1} classNames="alert" timeout={300} unmountOnExit >
          <div className="container ProductTabsDescriptonContainer">
            <p>{discription}</p>
            <div className="row">
              <img src="./../img/product/brend_img.jpg" alt="brend" />
              <div>
                <h5>BRAND</h5>
                <p>{brand}</p>
              </div>
            </div>
            <div className="row ProductTabsDescriptonContainerLI">
              <div>
                <h5>PRODUCT DETAILS</h5>
                <ul>
                  {productDiteils.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5>SIZE & FIT</h5>
                <ul>
                  {sizeFit.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5>ABOUT ME</h5>
                <ul>
                  {aboutMe.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </CSSTransition>
        <CSSTransition in={tab === 2} classNames="alert" timeout={300} unmountOnExit >
          <div className="container poductInfoContainer">
            <div className="col-sx-4 col-sm-4 col-md-4 col-ld-4">
              <div>MORE INFOMATION TO YOU</div>
              <h5>Things You Need To Know</h5>
              <div>
                We use industry standard SSL encryption to protect your
                details. Potentially sensitive information such as your name,
                address and card details are encoded so they can only be read
                on the secure server.
              </div>
              <ul>
                <li>Safe Payments</li>
                <li>Accept Credit Cart</li>
                <li>Different Payment Method</li>
                <li>Price Include VAT</li>
                <li>Easy To Order</li>
              </ul>
            </div>
            <div className="col-sx-4 col-sm-4 col-md-4 col-ld-4">
              <ul>
                <h5>Express Delivery</h5>
                <li>Europe & USA within 2-4 days</li>
                <li>Rest of the world within 3-7 days</li>
                <li>Selected locations</li>
              </ul>
              <ul>
                <h5>Need More Information</h5>
                <li>Orders & Shipping</li>
                <li>Returns & Refunds</li>
                <li>Payments</li>
                <li>Your Orders</li>
              </ul>
            </div>
            <div className="col-sx-4 col-sm-4 col-md-4 col-ld-4">
              <img src={img} alt={img} className="poductInfoImg" />
            </div>
          </div>
        </CSSTransition>
        <CSSTransition in={tab === 3} classNames="alert" timeout={300} unmountOnExit >
          <div className="container porductReviewsContainer2">
            <div className="porductReviewsContainer">
              <div className="porductReviewsH1">CUSTOMER REVIEWS</div>
              <div
                className="clickOnWriteReviews"
                onClick={() => seAnimeatetRewise(!inimateRewise)}
              >
                Write a review
              </div>
            </div>
            <CSSTransition in={inimateRewise} classNames="alert" timeout={300} unmountOnExit >
              <WriteReview
                sentReview={sentReview}
                setPost={setPost}
                post={post}
              />
            </CSSTransition>
            <div>
              {reviews.map((i) =>
                i.id !== Number ? (
                  <div key={i.id}>
                    <Grade grade={i.grade} />
                    <div className="porductReviewsName">{i.name}</div>
                    <div className="porductReviewsText">{i.text}</div>
                  </div>
                ) : (
                  <div>No reviews yet</div>
                )
              )}
            </div>
          </div>
        </CSSTransition>
      </div>
    </>
  );
};

export default ProductTabs;
