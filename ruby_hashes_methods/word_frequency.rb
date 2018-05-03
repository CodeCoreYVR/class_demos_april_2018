paragraph = '
The comments -- part of a bizarre, heated conference call after the close Wednesday -- sent the electric-car maker’s stock plunging. Tesla fell as much as 8.6 percent Thursday after the chief executive officer rejected analysts’ questions on another quarter in which the company burned more than $1 billion in cash.


Musk, 46, may have backed Tesla into a corner. While he repeated that the carmaker won’t need more capital this year -- and said he specifically doesn’t want to raise any -- even Tesla bulls harbor doubts about its cash position. The CEO demonstrated willingness to bite the hand that feeds by ridiculing representatives of Wall Street’s biggest banks, some of which have helped the company raise billions of dollars to fund his other-worldly ambitions'

words = paragraph.split

counts = Hash.new(0)

words.each do |word|
  counts[word] += 1
end

counts.each do |word, count|
  puts "#{word}: #{count}"
end

# Solution 2
puts paragraph.split.each_with_object(Hash.new(0)) { |word, counts| counts[word] += 1 }
