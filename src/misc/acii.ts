// ACII art
import figlet from 'figlet';

export const AciiArt = () => {
  figlet("Dominic's Toolkit", function (err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    console.log(data);
  });
};
