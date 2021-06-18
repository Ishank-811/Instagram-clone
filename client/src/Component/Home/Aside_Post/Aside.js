import React from "react";
import "./aside.css";
const Aside = () => {
  return (
    <div class="aside-section">
      <div class="aside3">
        <div class="aside3-t">
          <div class="aside2-top">
            <div class="aside2-top1 tp3">Suggestions For You</div>
            <div class="aside2-top2">
              <a href=" ">See All</a>
            </div>
          </div>
          <div class="aside3-body">
            <div class="st">
              <div class="suggestions">
                <div class="sugg-pix">
                  <a href=" ">
                    <img
                      class="picture"
                      src="https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/74/f2/c2/74f2c2b7-842d-3af6-1ba2-d4563b897c8f/pr_source.png/800x800bb.jpeg"
                      alt="user"
                    ></img>
                  </a>
                </div>

                <div class="profile-info">
                  <span class="profile-link s-link">
                    <a href=" ">iamjodeep</a>
                  </span>

                  <span class="time-stamp">New to Instagram</span>
                </div>

                <button class="follow">
                  <a href=" " class="ff">
                    Follow
                  </a>
                </button>
              </div>

              <div class="suggestions">
                <div class="sugg-pix">
                  <a href=" ">
                    <img
                      class="picture"
                      src="https://dailypost.ng/wp-content/uploads/2019/06/Biodun-fatoyinbo.jpg"
                      alt="user"
                    ></img>
                  </a>
                </div>

                <div class="profile-info">
                  <span class="profile-link s-link">
                    <a href=" ">pst_iren</a>
                  </span>

                  <span class="time-stamp">New to Instagram</span>
                </div>

                <button class="follow">
                  <a href=" " class="ff">
                    Follow
                  </a>
                </button>
              </div>

              <div class="suggestions">
                <div class="sugg-pix">
                  <a href=" ">
                    <img
                      class="picture"
                      src="data:image/jpeg;base64,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"
                      alt="user"
                    ></img>
                  </a>
                </div>

                <div class="profile-info">
                  <span class="profile-link s-link">
                    <a href=" ">simplynaza</a>
                  </span>

                  <span class="time-stamp">New to Instagram</span>
                </div>

                <button class="follow">
                  <a href=" " class="ff">
                    Follow
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aside;
