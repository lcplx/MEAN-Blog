import { Component, OnInit, OnDestroy } from "@angular/core";
import { Profile } from "../profile.model";
import { Subscription } from "rxjs";
import { AuthService } from "../../auth/auth.service"
import { ProfileService } from "../profile.service";
import { PageEvent } from "@angular/material";
@Component({
  selector:"app-profile-analysis",
  templateUrl: './profile-analysis.component.html',
  styleUrls: ['./profile-analysis.component.css']
})
export class ProfileAnalysisComponent implements OnInit, OnDestroy {
  isLoading = true;
 // posts = [
  //   { title: "First Post", content: "This is the first post's content" },
  //   { title: "Second Post", content: "This is the second post's content" },
  //   { title: "Third Post", content: "This is the third post's content" }
  // ];
  profile: Profile;
  totalPosts = 0;

  userIsAuthenticated = false;
  userId: string;
  private postsSub: Subscription;
  private authStatusSub: Subscription;

  constructor(
    public profileServie: ProfileService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    if (!this.profile) {
      this.profileServie.getProfile(this.userId);
    }
    this.userId = this.authService.getUserId();
    this.profile = {
      id:"1",
      background:"1",
      contact:"1", sex:"1", hight:11, face:"1",
      dob:new Date(), education:"1", job:"1", talent:"1", currentoverall:99
    }
    // this.profileServie.addPost
    this.postsSub = this.profileServie
      .getPostUpdateListener()
      .subscribe((profileData: { profile: Profile }) => {
        this.profile = profileData.profile;
      });
      this.userIsAuthenticated = this.authService.getIsAuth();
      this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.userId = this.authService.getUserId();
      });
      this.isLoading = false;
  }

  onChangedPage(pageData: PageEvent) {
    this.isLoading = true;
    this.profileServie.getPost(this.userId);
  }

  onDelete(postId: string) {
    this.isLoading = true;
    this.profileServie.deletePost(postId).subscribe(() => {
      this.profileServie.getPost(this.userId);
    }, () => {
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  }
}
