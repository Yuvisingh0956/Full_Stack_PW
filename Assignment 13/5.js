let packageType = "overnight";

switch (packageType){
    case "standard":
        console.log("Package will be delivered in 3-5 days.");
        break;
    case "exprerss":
        console.log("Package will be delivered in 1-2 days.");
        break;
    case "overnight":
        console.log("Package will be delivered the next day.");
        break;
    default:
        console.log("Type of package is wrong");
}