// Map status codes to human-friendly sentences
export const errorMessages: Record<number, string> = {
  404: "The anime you are looking for cannot be found.",
  500: "Oops! Something went wrong on our end.",
  403: "You do not have permission to access this resource.",
  400: "The request was invalid.",
  401: "Please log in to continue.",
  503: "Our servers are currently unavailable. Please try again later.",
};
