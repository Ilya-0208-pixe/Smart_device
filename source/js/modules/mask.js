import IMask from "imask";

export const maskPhone = () => {
  const inputElement = document.querySelectorAll("input[type=tel]");
  const maskOptions = {
    mask: "+{7}(000)000-00-00",
  };
  inputElement.forEach(function (item) {
    IMask(item, maskOptions);
  });
};
