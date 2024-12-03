

export default function incrementValue(jsonObject, key) {
    if (jsonObject.hasOwnProperty(key)) {
        // Increment the value by 1
        jsonObject[key] += 1;
    } else {
        console.log("Key not found in JSON.");
    }
    return jsonObject;
}

// Example usage:
let data = {
    "count": 5
};

let updatedData = incrementValue(data, "count");
console.log(updatedData);  // Output: { count: 6 }

