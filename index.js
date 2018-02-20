function theBeatlesPlay(musicians, instruments)
{
  var newArray = [];
  for (var i = 0; i < musicians.length; i++)
  {
    newarray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

function johnLennonFacts(facts)
{
  var counters = 0;
  var newfacts = [];
  while(facts.length > counters)
  {
    newfacts.push(`${facts[counters]}!!!`);
    counters++;
  }
  return newfacts;
}