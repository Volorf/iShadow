// Main settings
var settings = {
  blur: "16",
  offset: "8",
  scale: "0.85"
}

// Label function
function createLabel(text, frame) {
  var label = [[NSTextField alloc] initWithFrame:frame];
  [label setStringValue:text];
  [label setFont:[NSFont boldSystemFontOfSize:12]];
  [label setBezeled:false];
  [label setDrawsBackground:false];
  [label setEditable:false];
  [label setSelectable:false];
  return label;
}

// Alert
function askUser(context) {
  // Set initial block for our fields
  var viewBox = [[NSBox alloc] initWithFrame:NSMakeRect(0, 0, 0, 0)];
  viewBox.title = "";
  viewBox.titleFont = [NSFont systemFontOfSize:1]
  viewBox.transparent = true

  // Create a blur's label
  [viewBox addSubview:createLabel("Blur", NSMakeRect(0, 20, 60, 20))];
  // Create a blur's text field
  var blurField = [[NSTextField alloc] initWithFrame: NSMakeRect(0, 0, 60, 20)];
  [blurField setStringValue: settings.blur];
  [viewBox addSubview: blurField];

  // Create an offset's label
  [viewBox addSubview:createLabel("Offset", NSMakeRect(80, 20, 60, 20))];
  // Create an offset's text field
  var offsetField = [[NSTextField alloc] initWithFrame:NSMakeRect(80, 0, 60, 20)];
  [offsetField setStringValue: settings.offset];
  [viewBox addSubview: offsetField];

  // Create a scale's label
  [viewBox addSubview:createLabel("Scale", NSMakeRect(160, 20, 60, 20))];
  // Create a scale's text field
  var scaleField = [[NSTextField alloc] initWithFrame:NSMakeRect(160, 0, 60, 20)];
  [scaleField setStringValue: settings.scale];
  [viewBox addSubview: scaleField];

  // Fit our UI
  [viewBox sizeToFit];

  // Create an alert
  var alert = [[NSAlert alloc] init];
  // Set a common UI to the alert
  [alert setMessageText: "Shadow parameters"];
  [alert addButtonWithTitle: "OK"];
  [alert addButtonWithTitle: "Cancel"];
  // Add our UI box into the alert
  [alert setAccessoryView:viewBox];

  // Call the alert
  var responseCode = [alert runModal];

  // Convert text field values which are strings to Numbers
  // and put this values into settings object
  settings.blur = Number(blurField.stringValue())
  settings.offset = Number(offsetField.stringValue())
  settings.scale = Number(scaleField.stringValue())

  // Return values
  return settings;
}

askUser()
