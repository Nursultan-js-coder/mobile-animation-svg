const path = document.getElementById("path-1");
const totalLength = path.getTotalLength();

path.style.strokeDasharray = totalLength;
path.style.strokeDashoffset = totalLength;
