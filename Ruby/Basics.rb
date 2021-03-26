## This file is where I am storing my Codewars daily practice.

## Add Length
    # What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
    # add_length('apple ban') => ["apple 5", "ban 3"]
    # add_length('you will win') => ["you 3", "will 4", "win 3"]
    # Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

    #my solution
    def add_length(str)
        arr = str.split
        arr.map { |string| string + " " + string.length.to_s}
    end

    #most common
    def add_length(str)
        str.split.map { |word| "#{word} #{word.length}" }
    end

## 

str = "the_stelth_warrior"

def to_camel_case(str)
    arr = str.split(/[_,-]/)
    if arr.length > 0 
#       arr.each{ |s| s.capitalize}.join
        new1 = arr.select {|i| i.length >= 1 }.each {|i| s.slice(0,1).capitalize + string.slice(1..-1) }.join
        puts new1
    else
        return ""
    end
end