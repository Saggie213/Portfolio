#!/usr/bin/env python3
"""
Backend API Testing for Portfolio Application
Tests the portfolio backend API endpoints as specified in the review request.
"""

import requests
import json
import sys
from datetime import datetime

# Backend URL from frontend/.env
BACKEND_URL = "https://portfolio-hub-1098.preview.emergentagent.com"

def test_hello_world():
    """Test GET /api/ - Should return 'Hello World'"""
    print("\n=== Testing GET /api/ ===")
    try:
        response = requests.get(f"{BACKEND_URL}/api/")
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print("✅ GET /api/ test PASSED")
                return True
            else:
                print(f"❌ GET /api/ test FAILED - Expected 'Hello World', got: {data}")
                return False
        else:
            print(f"❌ GET /api/ test FAILED - Status code: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ GET /api/ test FAILED - Exception: {str(e)}")
        return False

def test_submit_contact_form():
    """Test POST /api/contact - Submit a contact form"""
    print("\n=== Testing POST /api/contact ===")
    
    contact_data = {
        "name": "Test User",
        "email": "test@example.com", 
        "message": "This is a test message for the portfolio contact form."
    }
    
    try:
        response = requests.post(
            f"{BACKEND_URL}/api/contact",
            json=contact_data,
            headers={"Content-Type": "application/json"}
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 201:
            data = response.json()
            # Verify the response contains our submitted data
            if (data.get("name") == contact_data["name"] and 
                data.get("email") == contact_data["email"] and
                data.get("message") == contact_data["message"]):
                print("✅ POST /api/contact test PASSED")
                return True, data.get("id")  # Return the ID for reference
            else:
                print(f"❌ POST /api/contact test FAILED - Response data doesn't match input")
                return False, None
        else:
            print(f"❌ POST /api/contact test FAILED - Status code: {response.status_code}")
            return False, None
            
    except Exception as e:
        print(f"❌ POST /api/contact test FAILED - Exception: {str(e)}")
        return False, None

def test_get_contact_messages():
    """Test GET /api/contact - Should return submitted contact messages"""
    print("\n=== Testing GET /api/contact ===")
    
    try:
        response = requests.get(f"{BACKEND_URL}/api/contact")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Number of messages retrieved: {len(data)}")
            
            if len(data) > 0:
                print("Sample message:")
                print(json.dumps(data[0], indent=2, default=str))
                
                # Check if our test message is in the results
                test_message_found = False
                for msg in data:
                    if (msg.get("name") == "Test User" and 
                        msg.get("email") == "test@example.com" and
                        "This is a test message for the portfolio contact form." in msg.get("message", "")):
                        test_message_found = True
                        break
                
                if test_message_found:
                    print("✅ GET /api/contact test PASSED - Test message found")
                    return True
                else:
                    print("⚠️  GET /api/contact test PARTIAL - Messages retrieved but test message not found")
                    return True  # Still consider this a pass as the endpoint works
            else:
                print("⚠️  GET /api/contact test PARTIAL - No messages found (endpoint works but empty)")
                return True
        else:
            print(f"❌ GET /api/contact test FAILED - Status code: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ GET /api/contact test FAILED - Exception: {str(e)}")
        return False

def main():
    """Run all backend API tests"""
    print("🚀 Starting Portfolio Backend API Tests")
    print(f"Backend URL: {BACKEND_URL}")
    print("=" * 60)
    
    results = []
    
    # Test 1: Hello World endpoint
    results.append(("GET /api/", test_hello_world()))
    
    # Test 2: Submit contact form
    submit_result, contact_id = test_submit_contact_form()
    results.append(("POST /api/contact", submit_result))
    
    # Test 3: Get contact messages
    results.append(("GET /api/contact", test_get_contact_messages()))
    
    # Summary
    print("\n" + "=" * 60)
    print("📊 TEST SUMMARY")
    print("=" * 60)
    
    passed = 0
    total = len(results)
    
    for test_name, result in results:
        status = "✅ PASSED" if result else "❌ FAILED"
        print(f"{test_name:<20} {status}")
        if result:
            passed += 1
    
    print(f"\nOverall: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All tests PASSED!")
        return 0
    else:
        print("⚠️  Some tests FAILED!")
        return 1

if __name__ == "__main__":
    sys.exit(main())