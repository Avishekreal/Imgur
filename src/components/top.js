import React,{Component} from "react";
import './top.scss';

class Top extends Component {


    render() {
        return(
            <div className="top-container">
                <div className="top-container-background"></div>
                <div className="top-container-card1">
                    <div className="top-container-card1-options">
                        <div className="top-container-card1-options-left">
                            <span className="">95 Views</span>
                            <span class="delimiter">•</span>
                            <span title="Tue Jun 07 2022 17:03:09 GMT+0530 (India Standard Time)">14h</span>
                        </div>
                        <div className="top-container-card1-options-right">
                            <div className="dropdown-title">...</div>
                            <button className="next-button">Next </button>
                        </div>
                    </div>
                    <div className="top-container-card1-img">
                        <img className="img" src="https://i.imgur.com/ymkBDZa.png"></img>
                    </div>
                </div>
                <div className="top-container-left">
                    <button className="favourite-btn">
                        <svg width="32" height="32" viewBox="0 0 32 32" class="Favorite" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Add to Favorites</title><path fill="none" stroke="#ffffff" stroke-width="2" d="M20.0449 8.25C18.3743 8.25 16.8978 9.21911 16 10.4871C15.1024 9.21911 13.6258 8.25 11.9551 8.25C9.2185 8.25 7 10.4702 7 13.209C7 16.082 9.07109 19.5814 14.9328 23.5493C15.5767 23.9852 16.4233 23.9852 17.0672 23.5493C22.9289 19.5814 25 16.082 25 13.209C25 10.4702 22.7816 8.25 20.0449 8.25Z"></path></svg>
                    </button>
                    <div className="Dropdown-title">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Share</title><path fill="#ffffff" fill-rule="evenodd" clip-rule="evenodd" d="M22 7.5C20.8954 7.5 20 8.39543 20 9.5C20 10.6046 20.8954 11.5 22 11.5C23.1046 11.5 24 10.6046 24 9.5C24 8.39543 23.1046 7.5 22 7.5ZM18 9.5C18 7.29086 19.7909 5.5 22 5.5C24.2091 5.5 26 7.29086 26 9.5C26 11.7091 24.2091 13.5 22 13.5C20.802 13.5 19.7271 12.9734 18.994 12.139L13.8494 14.9091C13.9475 15.2559 14 15.6218 14 16C14 16.3782 13.9475 16.7441 13.8494 17.0909L18.994 19.861C19.7271 19.0266 20.802 18.5 22 18.5C24.2091 18.5 26 20.2909 26 22.5C26 24.7091 24.2091 26.5 22 26.5C19.7909 26.5 18 24.7091 18 22.5C18 22.2071 18.0315 21.9215 18.0913 21.6465L12.8387 18.8181C12.114 19.548 11.1098 20 10 20C7.79086 20 6 18.2091 6 16C6 13.7909 7.79086 12 10 12C11.1098 12 12.114 12.452 12.8387 13.1819L18.0913 10.3535C18.0315 10.0785 18 9.79294 18 9.5ZM10 14C8.89543 14 8 14.8954 8 16C8 17.1046 8.89543 18 10 18C11.1046 18 12 17.1046 12 16C12 14.8954 11.1046 14 10 14ZM20 22.5C20 21.3954 20.8954 20.5 22 20.5C23.1046 20.5 24 21.3954 24 22.5C24 23.6046 23.1046 24.5 22 24.5C20.8954 24.5 20 23.6046 20 22.5Z"></path></svg>
                    </div>
                </div>
                <div className="top-container-right">
                    <div className="top-container-right-title">NEWEST IN MOST VIRAL</div>
                    <div className="top-container-right-title-bottom"></div>
                    <div className="top-container-right-section">
                        <div className="top-container-right-overflow" id="style">
                            <div className="top-container-right-context">
                                <img className="right-img" src="https://imgur.com/bSG9sZl.jpg" />
                                <div className="txt">Old video of Sonia Gandhi saying</div>
                            </div>
                            <div className="top-container-right-context">
                                <img className="right-img" src="https://imgur.com/sfzBJ3Q.jpg" />
                                <div className="txt">Old photo of damaged Jama Masjid from UP shared as a recent photo from UP</div>
                            </div>
                            <div className="top-container-right-context">
                                <img className="right-img" src="https://images.news18.com/ibnlive/uploads/2022/05/hardik-patel-new-16528518163x2.jpg" />
                                <div className="txt">Hardik Patel was not slapped after joining the BJP</div>
                            </div>
                            <div className="top-container-right-context">
                                <img className="right-img" src="https://imgur.com/5VT9pce.jpg" />
                                <div className="txt">No, Putin did not declare Islam as the second State religion of Russia</div>
                            </div>
                            <div className="top-container-right-context">
                                <img className="right-img" src="https://i.imgur.com/pKY2DH2.jpg" />
                                <div className="txt">Did Sourav Ganguly actually resign as the BCCI President? Rumours abound;</div>
                            </div>
                            <div className="top-container-right-context">
                                <img className="right-img" src="https://i.imgur.com/pKY2DH2.jpg" />
                                <div className="txt">Arrest of YouTuber Karthik Gopinath shared by OpIndia Editor-in-Chief with misleading claim</div>
                            </div>
                            <div className="top-container-right-context">
                                <img className="right-img" src="https://i.imgur.com/pKY2DH2.jpg" />
                                <div className="txt">Old case of TV5 Journalist quitting job viral as recent</div>
                            </div>
                            <div className="top-container-right-context">
                                <img className="right-img" src="https://i0.wp.com/www.opindia.com/wp-content/uploads/2020/08/Raam-Currency.jpg" />
                                <div className="txt">Photos of unrecognised and obsolete foreign currencies shared with fake claim</div>
                            </div>
                            <div className="top-container-right-context">
                                <img className="right-img" src="https://imgur.com/bSG9sZl.jpg" />
                                <div className="txt">Old video of Sonia Gandhi saying</div>
                            </div>
                            <div className="top-container-right-context">
                                <img className="right-img" src="https://imgur.com/sfzBJ3Q.jpg" />
                                <div className="txt">Old photo of damaged Jama Masjid from UP shared as a recent photo from UP</div>
                            </div>
                            <div className="top-container-right-context">
                                <img className="right-img" src="https://images.news18.com/ibnlive/uploads/2022/05/hardik-patel-new-16528518163x2.jpg" />
                                <div className="txt">Hardik Patel was not slapped after joining the BJP</div>
                            </div>
                            <div className="top-container-right-context">
                                <img className="right-img" src="https://imgur.com/5VT9pce.jpg" />
                                <div className="txt">No, Putin did not declare Islam as the second State religion of Russia</div>
                            </div>
                            <div className="top-container-right-context">
                                <img className="right-img" src="https://i.imgur.com/pKY2DH2.jpg" />
                                <div className="txt">Did Sourav Ganguly actually resign as the BCCI President? Rumours abound;</div>
                            </div>
                            <div className="top-container-right-context">
                                <img className="right-img" src="https://i.imgur.com/pKY2DH2.jpg" />
                                <div className="txt">Arrest of YouTuber Karthik Gopinath shared by OpIndia Editor-in-Chief with misleading claim</div>
                            </div>
                            <div className="top-container-right-context">
                                <img className="right-img" src="https://i.imgur.com/pKY2DH2.jpg" />
                                <div className="txt">Old case of TV5 Journalist quitting job viral as recent</div>
                            </div>
                            <div className="top-container-right-context">
                                <img className="right-img" src="https://i0.wp.com/www.opindia.com/wp-content/uploads/2020/08/Raam-Currency.jpg" />
                                <div className="txt">Photos of unrecognised and obsolete foreign currencies shared with fake claim</div>
                            </div>
                            <div className="top-container-right-context">
                                <img className="right-img" src="https://imgur.com/bSG9sZl.jpg" />
                                <div className="txt">Old video of Sonia Gandhi saying</div>
                            </div>
                            <div className="top-container-right-context">
                                <img className="right-img" src="https://imgur.com/sfzBJ3Q.jpg" />
                                <div className="txt">Old photo of damaged Jama Masjid from UP shared as a recent photo from UP</div>
                            </div>
                            <div className="top-container-right-context">
                                <img className="right-img" src="https://images.news18.com/ibnlive/uploads/2022/05/hardik-patel-new-16528518163x2.jpg" />
                                <div className="txt">Hardik Patel was not slapped after joining the BJP</div>
                            </div>
                            <div className="top-container-right-context">
                                <img className="right-img" src="https://imgur.com/5VT9pce.jpg" />
                                <div className="txt">No, Putin did not declare Islam as the second State religion of Russia</div>
                            </div>
                            <div className="top-container-right-context">
                                <img className="right-img" src="https://i.imgur.com/pKY2DH2.jpg" />
                                <div className="txt">Did Sourav Ganguly actually resign as the BCCI President? Rumours abound;</div>
                            </div>
                            <div className="top-container-right-context">
                                <img className="right-img" src="https://i.imgur.com/pKY2DH2.jpg" />
                                <div className="txt">Arrest of YouTuber Karthik Gopinath shared by OpIndia Editor-in-Chief with misleading claim</div>
                            </div>
                            <div className="top-container-right-context">
                                <img className="right-img" src="https://i.imgur.com/pKY2DH2.jpg" />
                                <div className="txt">Old case of TV5 Journalist quitting job viral as recent</div>
                            </div>
                            <div className="top-container-right-context">
                                <img className="right-img" src="https://i0.wp.com/www.opindia.com/wp-content/uploads/2020/08/Raam-Currency.jpg" />
                                <div className="txt">Photos of unrecognised and obsolete foreign currencies shared with fake claim</div>
                            </div>
                        </div>
                        <div className="top-right-box"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Top;