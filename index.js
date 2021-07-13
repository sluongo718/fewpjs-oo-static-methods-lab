class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^a-z0-9- \.',_]/gim,"");
  }

  static titleize(sentence) {
    const newSentence = []
    sentence.split(" ").forEach(word => {
      switch (word) {
        case 'the':
          newSentence.push(word);
          break;
        case 'a':
          if (sentence[0] === 'a'){
            newSentence.push(word.toUpperCase());
          } else {
            newSentence.push(word);
          }
          break;
        case 'an':
          newSentence.push(word);
          break;
        case 'but':
          newSentence.push(word);
          break;
        case 'of':
          newSentence.push(word);
          break;
        case 'and':
          newSentence.push(word);
          break;
        case 'for':
          newSentence.push(word);
          break;
        case 'at':
          newSentence.push(word);
          break;
        case 'by':
          newSentence.push(word);
          break;
        case 'from': 
          newSentence.push(word);
          break;
        default:
          newSentence.push(word.charAt(0).toUpperCase() + word.slice(1));
          break;
      }
    });
    return newSentence.join(" ");
  }
  }

