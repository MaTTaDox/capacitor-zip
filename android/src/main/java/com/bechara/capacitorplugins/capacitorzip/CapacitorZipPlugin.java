package com.bechara.capacitorplugins.capacitorzip;

import android.Manifest;
import com.getcapacitor.PermissionState;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;
import com.getcapacitor.annotation.PermissionCallback;

@CapacitorPlugin(
    name = "CapacitorZip"
)
public class CapacitorZipPlugin extends Plugin {

    private final CapacitorZip implementation = new CapacitorZip();

    @PluginMethod
    public void unzip(PluginCall call) {
        implementation.unzipFile(call);
    }
}
