angular.module("app",["ngRoute"]),angular.module("app").controller("ContactCtrl",["$scope",function(t){function e(){0===$("#contact-message").val().length?$("#send-btn").prop("disabled",!0):$("#send-btn").prop("disabled",!1)}e(),$("#contact-message").click(function(){e()}),$("#contact-message").keypress(function(){e()}),$("#contact-message").on("keyup",function(){e()}),$("#send-btn").click(function(){$("#contact-name").val(""),$("#contact-contact").val(""),$("#contact-message").val("")})}]),angular.module("app").config(["$routeProvider",function(t){t.when("/",{controller:"na",templateUrl:"/templates/portfolio.html"}).when("/contact",{controller:"ContactCtrl",templateUrl:"/templates/contact.html"}).when("/about",{templateUrl:"/templates/about.html"}).when("/pigment",{templateUrl:"/templates/pigment.html"}).when("/bridge",{templateUrl:"/templates/bridge.html"}).when("/win8",{templateUrl:"/templates/win8.html"}).when("/cogs",{templateUrl:"/templates/cogs.html"})}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsIkNvbnRhY3QuY3RybC5qcyIsIlJvdXRlcy5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29udHJvbGxlciIsIiRzY29wZSIsImNoZWNrRW1wdHkiLCIkIiwidmFsIiwibGVuZ3RoIiwicHJvcCIsImNsaWNrIiwia2V5cHJlc3MiLCJvbiIsImNvbmZpZyIsIiRyb3V0ZVByb3ZpZGVyIiwid2hlbiIsInRlbXBsYXRlVXJsIl0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBUUMsT0FBTyxPQUNYLFlDREpELFFBQVFDLE9BQU8sT0FBT0MsV0FBVyxlQUFBLFNBQWMsU0FBU0MsR0FzQnZELFFBQVNDLEtBQ21DLElBQXZDQyxFQUFFLG9CQUFvQkMsTUFBTUMsT0FDL0JGLEVBQUUsYUFBYUcsS0FBSyxZQUFZLEdBR2hDSCxFQUFFLGFBQWFHLEtBQUssWUFBWSxHQXpCbENKLElBRUFDLEVBQUUsb0JBQW9CSSxNQUFNLFdBQzNCTCxNQUdEQyxFQUFFLG9CQUFvQkssU0FBUyxXQUM5Qk4sTUFHREMsRUFBRSxvQkFBb0JNLEdBQUcsUUFBUyxXQUNqQ1AsTUFHREMsRUFBRSxhQUFhSSxNQUFNLFdBQ3BCSixFQUFFLGlCQUFpQkMsSUFBSSxJQUN2QkQsRUFBRSxvQkFBb0JDLElBQUksSUFDMUJELEVBQUUsb0JBQW9CQyxJQUFJLFNDbkI1Qk4sUUFBUUMsT0FBTyxPQUNWVyxRQUFBLGlCQUFPLFNBQVNDLEdBQ2JBLEVBQ0tDLEtBQUssS0FBS1osV0FBVyxLQUFLYSxZQUFZLDhCQUN0Q0QsS0FBSyxZQUFZWixXQUFXLGNBQWVhLFlBQVksNEJBQ3ZERCxLQUFLLFVBQVVDLFlBQVksMEJBQ2pDRCxLQUFLLFlBQVlDLFlBQVksNEJBQzdCRCxLQUFLLFdBQVdDLFlBQVksMkJBQzVCRCxLQUFLLFNBQVNDLFlBQVkseUJBQzFCRCxLQUFLLFNBQVNDLFlBQVkiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2FwcCcsW1xuICAgICduZ1JvdXRlJ1xuXSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnRyb2xsZXIoJ0NvbnRhY3RDdHJsJyxmdW5jdGlvbigkc2NvcGUpe1xuXHRcblx0Y2hlY2tFbXB0eSgpO1xuXHRcblx0JChcIiNjb250YWN0LW1lc3NhZ2VcIikuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0Y2hlY2tFbXB0eSgpO1xuXHR9KTtcblx0XG5cdCQoJyNjb250YWN0LW1lc3NhZ2UnKS5rZXlwcmVzcyhmdW5jdGlvbigpIHtcblx0XHRjaGVja0VtcHR5KCk7XG5cdH0pO1xuXHRcblx0JCgnI2NvbnRhY3QtbWVzc2FnZScpLm9uKFwia2V5dXBcIiwgZnVuY3Rpb24oKSB7XG5cdFx0Y2hlY2tFbXB0eSgpO1xuXHR9KTtcblx0XG5cdCQoXCIjc2VuZC1idG5cIikuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0JChcIiNjb250YWN0LW5hbWVcIikudmFsKFwiXCIpO1xuXHRcdCQoXCIjY29udGFjdC1jb250YWN0XCIpLnZhbChcIlwiKTtcblx0XHQkKFwiI2NvbnRhY3QtbWVzc2FnZVwiKS52YWwoXCJcIik7XG5cdH0pO1xuXHRcblx0ZnVuY3Rpb24gY2hlY2tFbXB0eSgpIHtcblx0XHRpZiAoJCgnI2NvbnRhY3QtbWVzc2FnZScpLnZhbCgpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0JCgnI3NlbmQtYnRuJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHQkKCcjc2VuZC1idG4nKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcblx0XHR9XG5cdH1cblx0XG59KTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbiAgICAuY29uZmlnKGZ1bmN0aW9uKCRyb3V0ZVByb3ZpZGVyKXtcbiAgICAgICAgJHJvdXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC53aGVuKCcvJyx7Y29udHJvbGxlcjonbmEnLHRlbXBsYXRlVXJsOicvdGVtcGxhdGVzL3BvcnRmb2xpby5odG1sJ30pXG4gICAgICAgICAgICAud2hlbignL2NvbnRhY3QnLHtjb250cm9sbGVyOidDb250YWN0Q3RybCcsIHRlbXBsYXRlVXJsOicvdGVtcGxhdGVzL2NvbnRhY3QuaHRtbCd9KVxuICAgICAgICAgICAgLndoZW4oJy9hYm91dCcse3RlbXBsYXRlVXJsOicvdGVtcGxhdGVzL2Fib3V0Lmh0bWwnfSlcblx0XHRcdFx0XHRcdC53aGVuKCcvcGlnbWVudCcse3RlbXBsYXRlVXJsOicvdGVtcGxhdGVzL3BpZ21lbnQuaHRtbCd9KVxuXHRcdFx0XHRcdFx0LndoZW4oJy9icmlkZ2UnLHt0ZW1wbGF0ZVVybDonL3RlbXBsYXRlcy9icmlkZ2UuaHRtbCd9KVxuXHRcdFx0XHRcdFx0LndoZW4oJy93aW44Jyx7dGVtcGxhdGVVcmw6Jy90ZW1wbGF0ZXMvd2luOC5odG1sJ30pXG5cdFx0XHRcdFx0XHQud2hlbignL2NvZ3MnLHt0ZW1wbGF0ZVVybDonL3RlbXBsYXRlcy9jb2dzLmh0bWwnfSlcbiAgICB9KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
