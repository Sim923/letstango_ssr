
import React, { Component } from "react";
import { connect } from "react-redux";
import { userService } from '../../../helpers';

class ProductReview extends Component {

  constructor(){
    super();

    this.state = { 
                isExpertReview :false,
                userReview: [] ,
                expertReview: [],
                userNextPageUrl:'',
                expertNextUrl:''
            
            };


    this.getUserReviews = this.getUserReviews.bind(this)
    this.getExpertReviews = this.getExpertReviews.bind(this)
}

componentDidMount() {
     
     const review = JSON.parse(this.props.review)

    if((typeof review.user_review_url !== 'undefined')){
        this.getUserReviews(review.user_review_url)
      
    }if((typeof review.pro_review_url !== 'undefined')&&(typeof review.pro_review_url !== null)){
          this.getExpertReviews(review.pro_review_url)
    }
}

toggleReview = (isExpertReview) => {

    this.setState({isExpertReview})

}

getUserReviews(url){

    userService.getUserReviews(url).
      then((reponse) => {

              if (reponse.data !=null) {

                var userReviewArray = this.state.userReview.concat(reponse.data.reviews);
                        this.setState({ userReview: userReviewArray ,
                            userNextPageUrl:reponse.data.next_page_url
                    })
                }
            })
            .catch(err => console.log("Axios err: ", err))

        }  

    getExpertReviews(url){

        userService.getUserReviews(url).
          then((reponse) => {

                  if (reponse.data !=null) {

                       var expertReviewArray = this.state.expertReview.concat(reponse.data.reviews);
                        this.setState({ expertReview: expertReviewArray ,
                            expertNextUrl:reponse.data.next_page_url
                        })
                    }
                })
                .catch(err => console.log("Axios err: ", err))

        }
render() {


    const review = this.props.review ? JSON.parse(this.props.review):''
    var totalReviews ,fiveRating,fourRating,threeRating,twoRating,oneRating
    
     
     if( review.score !=null && review.pro_score_dist_all!=null){

        const userRate5 = review.user_score_dist_all[4]?review.user_score_dist_all[4]:0+review.user_score_dist_all[4]?review.user_score_dist_all[4]:0
        const userRate4 = review.user_score_dist_all[3]?review.user_score_dist_all[3]:0+review.user_score_dist_all[3]?review.user_score_dist_all[3]:0
        const userRate3 = review.user_score_dist_all[2]?review.user_score_dist_all[2]:0+review.user_score_dist_all[2]?review.user_score_dist_all[2]:0
        const userRate2 = review.user_score_dist_all[1]?review.user_score_dist_all[1]:0+review.user_score_dist_all[1]?review.user_score_dist_all[1]:0
        const userRate1 = review.user_score_dist_all[0]?review.user_score_dist_all[0]:0+review.user_score_dist_all[0]?review.user_score_dist_all[0]:0

        const proRate5  = review.pro_score_dist_all[4]?review.pro_score_dist_all[4]:0+review.pro_score_dist_all[4]?review.pro_score_dist_all[4]:0
        const proRate4  = review.pro_score_dist_all[3]?review.pro_score_dist_all[3]:0+review.pro_score_dist_all[3]?review.pro_score_dist_all[3]:0
        const proRate3  = review.pro_score_dist_all[2]?review.pro_score_dist_all[2]:0+review.pro_score_dist_all[2]?review.pro_score_dist_all[2]:0
        const proRate2  = review.pro_score_dist_all[1]?review.pro_score_dist_all[1]:0+review.pro_score_dist_all[1]?review.pro_score_dist_all[1]:0
        const proRate1  = review.pro_score_dist_all[0]?review.pro_score_dist_all[0]:0+review.pro_score_dist_all[0]?review.pro_score_dist_all[0]:0

        fiveRating     = userRate5+proRate5
        fourRating     = userRate4+proRate4
        threeRating    = userRate3+proRate3
        twoRating      = userRate2+proRate2
        oneRating      = userRate1+proRate1
        
        totalReviews    = fiveRating + fourRating + threeRating + twoRating + oneRating

    }


   return (

        <div className = "review-container">
            {review.score ? (
                <div>
                    <div id="review" className="specification">
                        <div className="row">
                            <div className="col-md-12 tille">
                                <h3>Reviews</h3>
                            </div>
                        </div>
                        <div id="rew-wrap" className="spec-wrap"> 
                            <div id="collapseSummary2" className="review-box align-items-center collapse">
                                <div id="review-titlle-block" className="row">
                                    <div className="col-md-2 col-12 text-center">
                                        <h5>OVERALL RATING</h5>
                                        
                                        <span className="rate-percentage">{(review.score/2).toFixed(1)}</span>

                                        
                                        <div className="rating-wraper">
                                            {[...Array(Math.floor(review.score/2))].map((key,index)=>

                                                  <span key={index} className="fa fa-star checked"></span>
                                        )}

                                        {  (5-(review.score/2))%1!==0 ? (
                                            <span className="fa fa-star-half-o checked"></span>
                                        ):(<span className="fa fa-star"></span>)}
                                     
                                        {[...Array(5-(Math.ceil(review.score/2)))].map((key,index)=>
                                            <span key={index} className="fa fa-star"></span>
                                        )}


                                        </div>

                                        
                                        <span className="rate-number">out of {totalReviews} reviews</span>

                                    </div>
                                <div className="col-md-6 col-12">
                                    <div className="pull-left rate-block">
                                        <div className="pull-left rating" >
                                            <div className="star-rate" ><span className={fiveRating>0?"fa fa-star checked":"fa fa-star"}></span> 5 </div>
                                        </div>
                                        <div className="pull-left rate-bar">
                                            <div className="progress">
                                                <div className="progress-bar bg-rate-bar" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="5" style={{width: (100-(totalReviews/fiveRating))+'%'}}>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="pull-right total-number">{fiveRating}</div>
                                    </div>
                                    <div className="pull-left rate-block">
                                        <div className="pull-left rating" >
                                            <div className="star-rate" ><span className={fourRating>0?"fa fa-star checked":"fa fa-star"}></span> 4 </div>
                                        </div>
                                        <div className="pull-left rate-bar">
                                            <div className="progress">
                                                <div className="progress-bar bg-rate-bar" role="progressbar" aria-valuenow="4" aria-valuemin="0" aria-valuemax="5" style={{width: (100-(totalReviews/fourRating))+'%'}}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pull-right total-number">{fourRating}</div>
                                    </div>


                                    <div className="pull-left rate-block">
                                        <div className="pull-left rating" >
                                            <div className="star-rate" ><span className={threeRating>0?"fa fa-star checked":"fa fa-star"}></span> 3 </div>
                                        </div>

                                        <div className="pull-left rate-bar">
                                            <div className="progress">
                                                <div className="progress-bar bg-rate-bar" role="progressbar" aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" style={{width: (100-(totalReviews/threeRating))+'%'}}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pull-right total-number">{threeRating}</div>
                                    </div>
                                    <div className="pull-left rate-block">
                                        <div className="pull-left rating" >
                                            <div className="star-rate" ><span className={twoRating>0?"fa fa-star checked":"fa fa-star"}></span> 2 </div>
                                        </div>
                                        <div className="pull-left rate-bar">
                                            <div className="progress">
                                                <div className="progress-bar bg-rate-bar" role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="5" style={{width: (100-(totalReviews/twoRating))+'%'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pull-right total-number">{twoRating}</div>
                                </div>

                                <div className="pull-left rate-block">
                                    <div className="pull-left rating" >
                                        <div className="star-rate" ><span className={oneRating>0?"fa fa-star checked":"fa fa-star"}></span> 1 </div>
                                    </div>
                                    <div className="pull-left rate-bar">
                                        <div className="progress">
                                            <div className="progress-bar bg-rate-bar" role="progressbar" aria-valuenow="1" aria-valuemin="0" aria-valuemax="5" style={{width: (100-(totalReviews/oneRating))+'%'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="pull-right total-number">{oneRating}</div>
                            </div>
                            <div className="clearfix"></div>    
                        </div>
                    
                {(review.product_pros!=null && review.product_cons!=null) && 
                 <div className="col-md-4 col-12" >

                    {(review.product_pros.length>0 && review.product_cons.length>0) &&

                        <div className="row">
                            
                            <div className="col-md-6 col-12">
                                <h5>PROS</h5>
                           
                                {review.product_pros ?(

                                    <ul>
                                    {review.product_pros.map((item,index) =>
                                        <li key={item}>{item}</li>
                                    )}
                                    </ul>
                                    ):(<div></div>)}

                             </div>


                            <div className="col-md-6 col-12">
                                <h5>CONS</h5>
                                {review.product_cons ?(
                                 <ul>
                                 {review.product_cons.map((item,index) =>
                                    <li key={item}> {item}</li>
                                    )}
                                </ul>
                                ):(<div></div>)}
                            </div>

                        </div>
                    }
                </div>

                }
            </div>

          

            { this.state.userReview !=null && 
                <div>
                    <div className="row reviews">
						<div className="col-12">
							<button className= {this.state.isExpertReview?'btn btn-info':'btn btn-info active'} onClick = {()=> this.toggleReview(false)}>  User Review</button>
							<button  className={this.state.isExpertReview?'btn btn-info active':'btn btn-info '} onClick = {()=> this.toggleReview(true)}>  Expert Review</button>
						</div>
                    </div>

                    {this.state.isExpertReview ? (
                        <div>
                            {this.state.expertReview.map((item, index) =>
                                <div key={index}>    
                                    <div className="row reviews">
                                        <div className="col-md-2 col-12">
                                            <h5>{item.author}</h5>
                                            <div className="rating-wraper">
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                            <span className="rate-number">{item.date}</span>
                                        </div>
                                        <div className="col-md-10 col-12">
                                            <p>{item.title}</p>
                                            <p>{item.extract}</p>
                                        </div>
                                    </div>

                                </div>
                            )}
                             <button className="btn btn-light" onClick = {()=>this.getExpertReviews(this.state.expertNextUrl)}>Next Page</button>
                        </div>
                    ):(
                        <div>
                            { this.state.userReview.map((item, index) =>

                                 <div key={index}>   
                                    <div className="row reviews">
                                        <div className="col-md-2 col-12">
                                            <h5>{item.author}</h5>
                                            <div className="rating-wraper">
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                            <span className="rate-number">{item.date}</span>
                                        </div>
                                        <div className="col-md-10 col-12">
                                            <p>{item.title}</p>
                                            <p>{item.extract}</p>
                                        </div>
                                    </div>

                                    
                                </div>
                        
                            )} 
                            <button  className="btn btn-light"  onClick = {()=>this.getUserReviews(this.state.userNextPageUrl)}>Next Page</button> 
                        </div>
                    )}
                </div>
            }

        </div>
    <div >


        </div>
        <div className="row">
            <a className="collapsed showlink" data-toggle="collapse" href="#collapseSummary2" aria-expanded="false" aria-controls="collapseSummary"></a>
        </div>
        <div className="clearfix"></div>
    </div>
    <div className="clearfix"></div>
    </div>
        </div>

    ) : ( <div></div> )}
    </div>

    )
}
}
export default (ProductReview);
